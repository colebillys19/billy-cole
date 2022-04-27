<script lang="ts">
	import { onMount } from 'svelte';

	import HomeNavMenu from '$lib/home-nav-menu.svelte';

	import '../styles/reset.css';
	import '../styles/global.scss';
	import store from '../store';

	const { isDarkMode } = store;

	let innerWidth = 0;

	onMount(() => {
		if (localStorage.getItem('isDarkMode')) {
			isDarkMode.set(true);
		}
	});
</script>

<svelte:window bind:innerWidth />
<HomeNavMenu isDesktop={innerWidth >= 1024} />
<main class:isDarkMode={$isDarkMode}>
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $palette-a;
		min-height: 100vh;
	}

	main.isDarkMode {
		background-color: $palette-g;
	}

	:global(main.isDarkMode .bgColorA) {
		background-color: $palette-g;
	}

	:global(main.isDarkMode .bgColorB) {
		background-color: $palette-f;
	}

	:global(.bgColorA) {
		background-color: $palette-a;
	}

	:global(.bgColorB) {
		background-color: $palette-b;
	}
</style>
