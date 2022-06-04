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
		<a href="/blog">see all posts</a>
	</div>
</HomeSectionContainer>

<style lang="scss">
	@media (min-width: 768px) {
		.container {
			text-align: left;
		}
	}
</style>
