<script lang="ts">
	import PostList from '$lib/home-blog-section-post-list.svelte';
	import store from '../store';
	import HomeSectionContainer from './home-section-container.svelte';

	const { isDarkMode, blogOffset } = store;

	const updateOffset = (offset: number): void => {
		blogOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="blog" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<h3>Recent Posts:</h3>
		<PostList />
		<a href="/blog">go to blog</a>
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3 {
		font-size: 24px;
		margin-bottom: 36px;
	}

	a {
		font-size: 20px;
	}

	// dark

	.isDarkMode h3 {
		color: $palette-a;
	}

	.isDarkMode a {
		color: $palette-b;
	}

	@media (min-width: 768px) {
		.container {
			text-align: left;
		}
	}
</style>
