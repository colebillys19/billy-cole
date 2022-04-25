<script lang="ts">
	import { onMount } from 'svelte';

	import HomeNavMobile from '$lib/home-nav-mobile.svelte';

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

<HomeNavMobile />
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

	.toggleDark {
		font-size: 10px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 1;
	}
</style>
