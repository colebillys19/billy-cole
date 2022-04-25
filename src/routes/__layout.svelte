<script lang="ts">
	import { onMount } from 'svelte';

	import HomeNavMobile from '$lib/home-nav-mobile.svelte';

	import '../styles/reset.css';
	import '../styles/global.scss';
	import store from '../store';

	const { isDarkMode } = store;

	$: isNavOpen = false;

	onMount(() => {
		if (localStorage.getItem('isDarkMode')) {
			isDarkMode.set(true);
		}
	});

	const toggleDarkMode = () => {
		isDarkMode.update((prevIsDark) => {
			if (!prevIsDark) {
				localStorage.setItem('isDarkMode', 'true');
			} else if (prevIsDark && localStorage.getItem('isDarkMode')) {
				localStorage.removeItem('isDarkMode');
			}
			return !prevIsDark;
		});
	};

	const toggleNavOpen = () => {
		isNavOpen = !isNavOpen;
	};
</script>

<button on:click={toggleDarkMode} class="toggleDark">toggle dark mode</button>
<button on:click={toggleNavOpen} class="toggleNav">toggle nav</button>
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
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
	}

	.toggleNav {
		font-size: 10px;
		position: absolute;
		right: 0;
		top: 30px;
		z-index: 1;
	}
</style>
