<script lang="ts">
	import EmailForm from '$lib/misc/email-form.svelte';
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
				<TextIconLink href="https://twitter.com/colebillys19" target="_blank">
					<TwitterIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
					<span class="textIconLinkText" slot="text">twitter</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://www.linkedin.com/in/billy-cole-4a3915178/" target="_blank">
					<LinkedinIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
					<span class="textIconLinkText" slot="text">linkedin</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink href="https://github.com/colebillys19" target="_blank">
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
		<EmailForm />
	</div>
</HomeSectionContainer>

<style lang="scss">
	ul {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		list-style: none;
		padding: 0 0 48px;
	}

	li:not(:last-of-type) {
		margin-bottom: 24px;
	}

	p {
		margin-bottom: 48px;
	}

	.container {
		max-width: 720px;
		text-align: left;
	}

	@media (min-width: 768px) {
		.container {
			margin: 0 auto;
		}
	}
</style>
