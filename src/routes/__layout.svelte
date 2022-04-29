<script lang="ts">
	import { onMount } from 'svelte';

	import HomeNavMenu from '$lib/home-nav-menu.svelte';

	import '../styles/reset.css';
	import '../styles/global.scss';
	import store from '../store';

	const { isDarkMode } = store;

	onMount(() => {
		if (localStorage.getItem('isDarkMode')) {
			isDarkMode.set(true);
		}
	});
</script>

<HomeNavMenu />
<main class:isDarkMode={$isDarkMode}>
	<slot />
</main>

<style global lang="scss">
	main {
		background-color: $palette-a;
		min-height: 100vh;
	}

	main.isDarkMode {
		background-color: $palette-g;
	}

	main.isDarkMode .bgColorA {
		background-color: $palette-g;
	}

	main.isDarkMode .bgColorB {
		background-color: $palette-f;
	}

	.bgColorA {
		background-color: $palette-a;
	}

	.bgColorB {
		background-color: $palette-b;
	}
</style>
