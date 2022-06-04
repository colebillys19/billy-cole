<script lang="ts">
	import TextIconLink from '$lib/text-icon-link.svelte';

	import store from '../store';
	import TwitterIcon from '../svgComponents/twitter-icon.svelte';
	import LinkedinIcon from '../svgComponents/linkedin-icon.svelte';
	import GithubIcon from '../svgComponents/github-icon.svelte';
	import HomeSectionContainer from './home-section-container.svelte';

	const { contactOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="contact" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<ul>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<TwitterIcon color="#bb77a2" slot="icon" />
					<span slot="text">twitter</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<LinkedinIcon color="#bb77a2" slot="icon" />
					<span slot="text">linkedin</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<GithubIcon color="#bb77a2" slot="icon" />
					<span slot="text">github</span>
				</TextIconLink>
			</li>
		</ul>
		<p>
			If you're reading this that means I'm still on the hunt for a new job! If you or someone you
			know is looking for a solid developer with a great sense for UI/UX, please don't hesitate to
			reach out!
		</p>
		<div class="formContainer">
			<form action="">
				<label for="msg">send a note:</label>
				<textarea name="msg" id="msg" cols="30" rows="10" />
				<button>send</button>
			</form>
		</div>
	</div>
</HomeSectionContainer>

<style lang="scss">
	ul {
		align-items: center;
		display: flex;
		justify-content: space-between;
		list-style: none;
		margin: 0 auto 24px;
		padding: 0;
	}

	p {
		font-family: 'Roboto', sans-serif;
		font-size: 18px;
		margin-bottom: 24px;
	}

	label {
		display: block;
		margin-bottom: 12px;
	}

	textarea {
		width: 100%;
		margin-bottom: 10px;
	}

	button {
		margin: 0;
	}

	.container {
		text-align: left;
	}

	// dark

	.isDarkMode p {
		color: $palette-a;
	}

	@media (min-width: 768px) {
		.container {
			margin: 0 auto;
			width: 720px;
		}
	}
</style>
