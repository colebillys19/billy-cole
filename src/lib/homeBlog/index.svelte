<script lang="ts">
	import HomeSectionContainer from '$lib/misc/home-section-container.svelte';
	import PostList from '$lib/blogHome/post-list.svelte';

	import store from '../../store';

	const { isDarkMode, blogOffset } = store;

	const updateOffset = (offset: number): void => {
		blogOffset.set(offset);
	};
</script>

<HomeSectionContainer name="blog" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<h3>Recent Posts:</h3>
		<PostList />
		<a class="bigLink" href="/blog">see all posts</a>
	</div>
</HomeSectionContainer>

<style lang="scss">
	@media (min-width: 768px) {
		.container {
			text-align: left;
		}
	}
</style>
