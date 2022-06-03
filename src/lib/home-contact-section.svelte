<script lang="ts">
	import store from '../store';
	import HomeSectionContainer from './home-section-container.svelte';

	const { contactOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="contact" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<a href="https://www.google.com/" target="_blank">twitter</a>
		<a href="https://www.google.com/" target="_blank">linkedin</a>
		<a href="https://www.google.com/" target="_blank">github</a>
		<h3>Reach out!</h3>
		<label for="msg">message:</label>
		<textarea name="msg" id="msg" cols="30" rows="10" />
		<div>
			<button>send</button>
		</div>
	</div>
</HomeSectionContainer>

<style lang="scss">
	a {
		display: block;
		font-size: 20px;
	}

	a:not(:last-of-type) {
		margin-bottom: 10px;
	}

	h3 {
		margin-top: 24px;
	}

	label {
		display: block;
	}

	textarea {
		width: 100%;
	}

	.container {
		text-align: left;
	}

	// dark

	.isDarkMode p {
		color: $palette-a;
	}

	@media (min-width: 768px) {
		textarea {
			width: 600px;
		}
	}
</style>
