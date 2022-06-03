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
		<h3>Reach out!</h3>
		<label for="msg">message:</label>
		<textarea name="msg" id="msg" cols="30" rows="10" />
		<div>
			<button>send</button>
		</div>
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3 {
		margin-top: 24px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li:not(:last-of-type) {
		margin-bottom: 16px;
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
