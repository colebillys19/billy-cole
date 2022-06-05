<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ error }) => ({
		props: { error }
	});
</script>

<script lang="ts">
	import GetIsMobile from '$lib/misc/get-is-mobile.svelte';
	import NavMenu from '$lib/blogHome/nav-menu.svelte';

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
</style>
