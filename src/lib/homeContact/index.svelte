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
					<TwitterIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
					<span class="textIconLinkText" slot="text">twitter</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<LinkedinIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
					<span class="textIconLinkText" slot="text">linkedin</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.google.com/" target="_blank">
					<GithubIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
					<span class="textIconLinkText" slot="text">github</span>
				</TextIconLink>
			</li>
		</ul>
		<p class="reading">
			If you're reading this that means I'm still on the hunt for a job! If you or someone you know
			is looking for a solid developer with a great sense for UI/UX, please don't hesitate to reach
			out!
		</p>
		<div class="formContainer">
			<form action="">
				<label for="msg">send me a note</label>
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
		margin: 0 auto 24px;
		padding: 0;
	}

	li:not(:last-of-type) {
		margin-bottom: 24px;
	}

	p {
		margin-bottom: 24px;
	}

	label {
		color: $palette-extra-dark;
		display: block;
	}

	textarea {
		width: 100%;
	}

	button {
		background-color: $palette-dark;
		border-radius: 6px;
		border: none;
		color: $palette-extra-light;
		padding: 6px 12px;
	}

	button:hover {
		cursor: pointer;
	}

	.container {
		text-align: left;
	}

	// DARK

	.isDarkMode button {
		background-color: $palette-dark;
		color: $palette-extra-light;
	}

	@media (min-width: 768px) {
		.container {
			margin: 0 auto;
			width: 720px;
		}

		button {
			font-size: 20px;
		}
	}
</style>
