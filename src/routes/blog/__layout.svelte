<script lang="ts">
	import { onMount } from 'svelte';

	import GetIsMobile from '$lib/misc/get-is-mobile.svelte';
	import NavMenu from '$lib/blogHome/nav-menu.svelte';

	import '../../styles/global.scss';
	import '../../styles/reset.css';
	import store from '../../store';

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
		min-height: 100vh;
	}
</style>
