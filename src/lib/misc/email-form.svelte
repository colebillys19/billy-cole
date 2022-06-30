<script lang="ts">
	import { onMount } from 'svelte';
	// import SvelteHCaptcha from 'svelte-hcaptcha';

	import CheckIcon from '../../svgComponents/check-icon.svelte';
	import envVariables from '../../envVariables';
	import HourglassIcon from '../../svgComponents/hourglass-icon.svelte';
	import SpinnerIcon from '../../svgComponents/spinner-icon.svelte';
	import store from '../../store';
	import WarningIcon from '../../svgComponents/warning-icon.svelte';

	const { contactActionUrl } = envVariables;
	const { isDarkMode } = store;

	let email = '';
	let message = '';
	// let isHcaptchaSuccess = false;

	// let captcha: HCaptcha;

	let isDoubleError = false;
	let isError = false;
	let isFormEnabled = false;
	let isLoading = false;
	let isSuccess = false;
	let isWaiting = false;

	$: isFormEnabled = !isDoubleError && !isError && !isLoading && !isSuccess && !isWaiting;
	$: isValidEmail = email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	// $: isButtonEnabled = isValidEmail && message && isHcaptchaSuccess;
	$: isButtonEnabled = isValidEmail && message;

	onMount(() => {
		const nowTimestamp = Date.now();

		const successTimestamp = localStorage.getItem('successTimestamp');
		if (successTimestamp) {
			const successTimestampNum = Number(successTimestamp);
			const successTimestampNumPlus3Min = successTimestampNum + 180000;
			if (successTimestampNumPlus3Min > nowTimestamp) {
				isWaiting = true;
				setTimeout(() => {
					localStorage.removeItem('successTimestamp');
					isWaiting = false;
				}, successTimestampNumPlus3Min - nowTimestamp);
			} else {
				localStorage.removeItem('successTimestamp');
			}
		}

		const doubleErrorTimestamp = localStorage.getItem('doubleErrorTimestamp');
		if (doubleErrorTimestamp) {
			const doubleErrorTimestampNum = Number(doubleErrorTimestamp);
			const doubleErrorTimestampNumPlus10Min = doubleErrorTimestampNum + 600000;
			if (doubleErrorTimestampNumPlus10Min > nowTimestamp) {
				isDoubleError = true;
				setTimeout(() => {
					localStorage.removeItem('doubleErrorTimestamp');
					isDoubleError = false;
				}, doubleErrorTimestampNumPlus10Min - nowTimestamp);
			} else {
				localStorage.removeItem('doubleErrorTimestamp');
			}
		}

		const errorTimestamp = localStorage.getItem('errorTimestamp');
		if (errorTimestamp) {
			const errorTimestampNum = Number(errorTimestamp);
			const errorTimestampNumPlus3Min = errorTimestampNum + 300000;
			if (errorTimestampNumPlus3Min <= nowTimestamp) {
				localStorage.removeItem('errorTimestamp');
			}
		}
	});

	const handleFormSubmit = () => {
		if (isFormEnabled) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', contactActionUrl);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			isLoading = true;

			xhr.onreadystatechange = () => {
				if (xhr.status !== 200) {
					isLoading = false;
					email = '';
					message = '';

					const errorTimestamp = localStorage.getItem('errorTimestamp');
					if (errorTimestamp) {
						const nowTimestamp = Date.now();
						const errorTimestampNum = Number(errorTimestamp);
						const wasPrevError = nowTimestamp - errorTimestampNum > 3000;
						if (wasPrevError) {
							localStorage.setItem('doubleErrorTimestamp', `${Date.now()}`);
							localStorage.removeItem('errorTimestamp');
							isDoubleError = true;
							setTimeout(() => {
								isDoubleError = false;
							}, 600000);
						}
					} else {
						localStorage.setItem('errorTimestamp', `${Date.now()}`);
						isError = true;
						setTimeout(() => {
							isError = false;
						}, 10000);
					}

					return false;
				}

				if (xhr.readyState === 4 && xhr.status === 200) {
					isSuccess = true;
					isLoading = false;
					email = '';
					message = '';
					localStorage.setItem('successTimestamp', `${Date.now()}`);
					setTimeout(() => {
						isSuccess = false;
						isWaiting = true;
					}, 3000);
				}
			};

			xhr.send(`email=${email}&message=${message}`);
		}
	};

	// const handleFormSubmit = (e: any) => {
	// 	console.log(e);
	// };

	// const handleHcaptchaSuccess = (e: any) => {
	// 	isHcaptchaSuccess = true;
	// };
</script>

<div class:isDarkMode={$isDarkMode} class="formContainer">
	<form
		class:isFormDisabled={!isFormEnabled}
		on:submit|preventDefault={handleFormSubmit}
		action=""
		class="gform"
		method="POST"
	>
		<label for="email">contact email:</label>
		<input bind:value={email} id="email" name="email" type="text" />
		<label for="message">message:</label>
		<textarea bind:value={message} name="message" id="message" cols="30" rows="10" />
		<!-- <SvelteHCaptcha
			on:error={() => {}}
			on:success={handleHcaptchaSuccess}
			sitekey={hcaptchaSiteKey}
		/> -->
		<button class:isButtonDisabled={!isButtonEnabled}>send</button>
	</form>
	<div class="formFeedbackContainer">
		{#if isLoading}
			<SpinnerIcon color={$isDarkMode ? '#fffeef' : '#bb77a2'} />
		{:else if isDoubleError}
			<div class="formFeedbackFlexContainer">
				<div>
					<WarningIcon color={$isDarkMode ? '#fffeef' : '#bb77a2'} />
				</div>
				<p>
					Looks like there are issues with this feature right now. Try again in a little bit or hit
					me up via email/social media.
				</p>
			</div>
		{:else if isError}
			<div class="formFeedbackFlexContainer">
				<div>
					<WarningIcon color={$isDarkMode ? '#fffeef' : '#bb77a2'} />
				</div>
				<p>There was an issue sending your message. Try again in a minute.</p>
			</div>
		{:else if isSuccess}
			<div class="formFeedbackFlexContainer">
				<div>
					<CheckIcon color={$isDarkMode ? '#fffeef' : '#bb77a2'} />
				</div>
				<p>Message sent!</p>
			</div>
		{:else if isWaiting}
			<div class="formFeedbackFlexContainer">
				<div>
					<HourglassIcon color={$isDarkMode ? '#fffeef' : '#bb77a2'} />
				</div>
				<p>Thanks for the message! Feel free to send another in a few minutes.</p>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	p {
		margin-top: 12px;
		text-align: center;
	}

	form {
		width: 100%;
	}

	label {
		color: $palette-extra-dark;
		display: block;
		margin: 0 0 6px;
	}

	input {
		border: 1px solid $palette-medium;
		color: $palette-extra-dark;
		font-family: 'Roboto', sans-serif;
		margin: 0 0 12px;
		padding: 12px;
		width: 100%;
	}

	textarea {
		border: 1px solid $palette-medium;
		color: $palette-extra-dark;
		font-family: 'Roboto', sans-serif;
		margin: 0 0 12px;
		padding: 12px;
		resize: none;
		width: 100%;
	}

	button {
		background-color: $palette-dark;
		border-radius: 6px;
		border: none;
		color: $palette-extra-light;
		display: block;
		// margin-top: 10px;
		padding: 6px 12px;
	}

	button:hover {
		cursor: pointer;
	}

	.formContainer {
		align-items: center;
		display: flex;
		justify-content: center;
		position: relative;
	}

	.formFeedbackContainer {
		padding-bottom: 24px;
		position: absolute;
		z-index: 1;
	}

	.formFeedbackFlexContainer {
		align-items: center;
		background-color: $light-bg-b;
		border: 1px solid $palette-medium;
		box-shadow: 2px 2px 0 $palette-dark;
		display: flex;
		flex-direction: column;
		margin: 0 48px;
		min-width: 360px;
		padding: 48px 64px;
	}

	.isFormDisabled {
		opacity: 0.4;
		pointer-events: none;
	}

	.isButtonDisabled {
		opacity: 0.5;
		pointer-events: none;
	}

	// DARK

	.isDarkMode input {
		border: 1px solid $palette-light;
		color: $palette-extra-dark;
	}

	.isDarkMode textarea {
		border: 1px solid $palette-light;
		color: $palette-extra-dark;
	}

	.isDarkMode button {
		background-color: $palette-dark;
		color: $palette-extra-light;
	}

	.isDarkMode .formFeedbackFlexContainer {
		background-color: $dark-bg-b;
		border: 1px solid $palette-light;
		box-shadow: 2px 2px 0 $palette-medium;
	}

	@media (min-width: 768px) {
		button {
			font-size: 20px;
		}

		input {
			width: 60%;
		}
	}
</style>
