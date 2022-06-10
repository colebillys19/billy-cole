<script lang="ts">
	import CheckIcon from '../../svgComponents/check-icon.svelte';
	import HourglassIcon from '../../svgComponents/hourglass-icon.svelte';
	import SpinnerIcon from '../../svgComponents/spinner-icon.svelte';
	import store from '../../store';
	import variables from '../../variables';
	import WarningIcon from '../../svgComponents/warning-icon.svelte';

	const { recaptchaSiteKey } = variables;

	const { isDarkMode } = store;

	let messageText = '';

	//
	let isDoubleError = false;
	let isError = false;
	let isLoading = false;
	let isSuccess = false;
	let isWaiting = false;

	$: isFormDisabled = isDoubleError || isError || isLoading || isSuccess || isWaiting;

	const handleFormSubmit = async () => {
		try {
			if (!isFormDisabled) {
				isLoading = true;

				const submit = await fetch('/postEmail', {
					method: 'POST',
					body: JSON.stringify({ messageText })
				});

				const { noIssues } = await submit.json();

				if (noIssues === 'yup') {
					isSuccess = true;
					isLoading = false;
				}
				// clear messageText and do stuff
			}
		} catch (err) {
			console.error(err);
			isError = true;
		}
	};
</script>

<div class:isDarkMode={$isDarkMode} class="formContainer">
	<form class:isFormDisabled on:submit|preventDefault={handleFormSubmit}>
		<label for="msg">send me a note</label>
		<textarea bind:value={messageText} name="msg" id="msg" cols="30" rows="10" />
		<div class="g-recaptcha" data-sitekey={recaptchaSiteKey} />
		<button class:isButtonDisabled={!messageText}>send</button>
	</form>
	<div class="formFeedbackContainer">
		{#if isLoading}
			<SpinnerIcon color={$isDarkMode ? '#e68a6e' : '#817a99'} />
		{:else if isDoubleError}
			<div class="formFeedbackFlexContainer">
				<div>
					<WarningIcon color={$isDarkMode ? '#e68a6e' : '#817a99'} />
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
	}

	textarea {
		color: $palette-extra-dark;
		font-family: 'Roboto', sans-serif;
		margin: 5px 0;
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
		padding: 6px 12px;
	}

	button:hover {
		cursor: pointer;
	}

	.formContainer {
		align-items: center;
		display: flex;
		// height: 384px;
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

	.isDarkMode textarea {
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
	}
</style>
