<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ error }) => ({
		props: { error }
	});
</script>

<script lang="ts">
	import NavMenu from '$lib/blog-nav-menu.svelte';
	import store from '../store';

	const { isDarkMode } = store;

	export let error = { message: '' };
</script>

<NavMenu isErrorNav />
<main class:isDarkMode={$isDarkMode}>
	<p>{error.message}</p>
</main>

<style lang="scss">
	// dark

	.isDarkMode {
		background-color: $palette-g;
	}

	.isDarkMode p {
		color: $palette-a;
		min-height: 100vh;
	}
</style>
