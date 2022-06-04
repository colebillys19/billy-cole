<script lang="ts">
	import PostList from '$lib/home-blog-section-post-list.svelte';

	import store from '../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogContainer">
	<h1>blog</h1>
	<PostList isFullList />
</div>

<style lang="scss">
	.blogContainer {
		margin: 0 auto;
		max-width: 1200px;
		padding: 0 60px 96px;
	}
</style>
