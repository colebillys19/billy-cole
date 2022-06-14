<script lang="ts">
	import PostList from '$lib/blogHome/post-list.svelte';

	import store from '../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="container">
	<h1>blog</h1>
	<PostList isFullList />
</div>

<style lang="scss">
	h1 {
		color: $palette-extra-dark;
		margin-bottom: 24px;
		text-shadow: 2px 2px 0 #000000;
	}

	.container {
		margin: 0 auto;
		max-width: 1200px;
		padding: 0 60px 96px;
	}

	// DARK

	.isDarkMode h1 {
		color: $palette-extra-light;
		text-shadow: 2px 2px 0 $palette-medium;
	}
</style>
