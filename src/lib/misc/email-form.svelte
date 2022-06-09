<script lang="ts">
	import CheckIcon from '../../svgComponents/check-icon.svelte';
	import HourglassIcon from '../../svgComponents/hourglass-icon.svelte';
	import SpinnerIcon from '../../svgComponents/spinner-icon.svelte';
	// import store from '../../store';
	import WarningIcon from '../../svgComponents/warning-icon.svelte';

	// const { isDarkMode } = store;

	let messageText = '';

	//
	let isDoubleError = false;
	let isError = false;
	let isLoading = false;
	let isSuccess = false;
	let isWaiting = false;

	const handleFormSubmit = async () => {
		try {
			const submit = await fetch('/postEmail', {
				method: 'POST',
				body: JSON.stringify({ messageText })
			});

			const { noIssues } = await submit.json();
			console.log('noIssues:', noIssues);
		} catch (err) {
			console.error(err);
		}
	};
</script>

<div class="formContainer">
	{#if isLoading}
		<SpinnerIcon />
	{:else if isDoubleError}
		<div class="formFeedbackContainer">
			<WarningIcon />
			<p>
				Looks like there are issues with this right now. Try again in a little bit or hit me up via
				email/social media.
			</p>
		</div>
	{:else if isError}
		<div class="formFeedbackContainer">
			<WarningIcon />
			<p>There was an issue sending your message. Try again in a minute.</p>
		</div>
	{:else if isSuccess}
		<div class="formFeedbackContainer">
			<CheckIcon />
			<p>Message sent!</p>
		</div>
	{:else if isWaiting}
		<div class="formFeedbackContainer">
			<HourglassIcon />
			<p>Thanks for the message. Feel free to send another in a few minutes.</p>
		</div>
	{:else}
		<form on:submit|preventDefault={handleFormSubmit}>
			<label for="msg">send me a note</label>
			<textarea bind:value={messageText} name="msg" id="msg" cols="30" rows="10" />
			<button class:isDisabled={!messageText}>send</button>
		</form>
	{/if}
</div>

<style lang="scss">
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
		margin: 0 0 0 auto;
		padding: 6px 12px;
	}

	button:hover {
		cursor: pointer;
	}

	.formContainer {
		align-items: center;
		display: flex;
		height: 374px;
		justify-content: center;

		outline: 1px solid orange;
	}

	.formFeedbackContainer {
		align-items: center;
		display: flex;
		margin: 0 48px;

		outline: 1px solid green;
	}

	.isDisabled {
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

	@media (min-width: 768px) {
		button {
			font-size: 20px;
		}
	}
</style>
