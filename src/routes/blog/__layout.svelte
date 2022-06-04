<script lang="ts">
	import { onMount } from 'svelte';

	import GetIsMobile from '$lib/get-is-mobile.svelte';
	import NavMenu from '$lib/home-blog-nav-menu.svelte';

	import store from '../../store';
	import '../../styles/reset.css';
	import '../../styles/global.scss';

	const { isDarkMode } = store;

	onMount(() => {
		const userPrefersDarkMode = localStorage.getItem('isDarkMode');
		const browserPrefersDarkMode =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (userPrefersDarkMode === null && browserPrefersDarkMode) {
			isDarkMode.set(true);
		} else {
			isDarkMode.set(userPrefersDarkMode === 'true');
		}
	});
</script>

<GetIsMobile />
<main class:isDarkMode={$isDarkMode}>
	<NavMenu />
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $palette-a;
		min-height: 100vh;
	}
</style>
