<script lang="ts">
	import { onMount } from 'svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import store from '../store';
	import HomeIcon from '../svgComponents/home-icon.svelte';
	import MoonIcon from '../svgComponents/moon-icon.svelte';
	import SunIcon from '../svgComponents/sun-icon.svelte';
	import '../styles/reset.css';
	import '../styles/global.scss';

	const { isDarkMode } = store;

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
</script>

<main class:isDarkMode={$isDarkMode}>
	<nav>
		<button on:click={() => goto('/')}>
			<HomeIcon />
		</button>
		{#if $page.url.pathname !== '/blog'}
			<a href="/blog">blog page</a>
		{/if}
		<button on:click={toggleDarkMode}>
			{#if $isDarkMode}
				<SunIcon />
			{:else}
				<MoonIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} />
			{/if}
		</button>
	</nav>
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

	button {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border-radius: 50%;
		border: none;
		display: flex;
		height: 60px;
		justify-content: center;
		padding: 0;
		width: 60px;
	}

	button:hover {
		cursor: pointer;
	}

	nav {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	nav a {
		font-size: 18px;
		text-decoration: none;
	}
</style>
