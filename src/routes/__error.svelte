<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ error }) => ({
		props: { error }
	});
</script>

<script lang="ts">
	import GetIsMobile from '$lib/get-is-mobile.svelte';
	import NavMenu from '$lib/blog-nav-menu.svelte';

	import store from '../store';

	const { isDarkMode } = store;

	export let error = { message: '' };
</script>

<GetIsMobile />
<NavMenu isErrorNav />
<main class:isDarkMode={$isDarkMode}>
	<p>404</p>
	<p>{error.message}</p>
</main>

<style lang="scss">
	main {
		min-height: calc(100vh - 80px);
	}

	// dark

	.isDarkMode {
		background-color: $palette-g;
	}

	.isDarkMode p {
		color: $palette-a;
	}
</style>
