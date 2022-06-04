<script lang="ts">
	import HomeSectionContainer from '$lib/misc/home-section-container.svelte';
	import TextIconLink from '$lib/misc/text-icon-link.svelte';

	import GithubIcon from '../../svgComponents/github-icon.svelte';
	import LinkedinIcon from '../../svgComponents/linkedin-icon.svelte';
	import store from '../../store';
	import TwitterIcon from '../../svgComponents/twitter-icon.svelte';

	const { contactOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer name="contact" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<ul>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<TwitterIcon color="#383d5d" slot="icon" />
					<span slot="text">twitter</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<LinkedinIcon color="#383d5d" slot="icon" />
					<span slot="text">linkedin</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<GithubIcon color="#383d5d" slot="icon" />
					<span slot="text">github</span>
				</TextIconLink>
			</li>
		</ul>
		<p class="reading">
			If you're reading this that means I'm still on the hunt for a new job! If you or someone you
			know is looking for a solid developer with a great sense for UI/UX, please don't hesitate to
			reach out!
		</p>
		<div class="formContainer">
			<form action="">
				<label for="msg">send me a note:</label>
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
		flex-direction: column;
		justify-content: space-between;
		list-style: none;
		margin: 0 auto;
		padding: 0;
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

	@media (min-width: 768px) {
		.container {
			margin: 0 auto;
			width: 720px;
		}
	}
</style>
