<script lang="ts">
	import { onMount } from 'svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import IconButton from '$lib/icon-button.svelte';

	import store from '../store';
	import HomeIcon from '../svgComponents/home-icon.svelte';
	import MoonIcon from '../svgComponents/moon-icon.svelte';
	import SunIcon from '../svgComponents/sun-icon.svelte';
	import '../styles/reset.css';
	import '../styles/global.scss';

	const { isDarkMode } = store;

	export let isErrorNav = false;

	onMount(() => {
		if (localStorage.getItem('isDarkMode')) {
			isDarkMode.set(true);
		}
	});

	const toggleDarkMode = () => {
		isDarkMode.update((userPrefersDarkModeState) => {
			const newValue = !userPrefersDarkModeState;
			localStorage.setItem('isDarkMode', newValue.toString());
			return newValue;
		});
	};
</script>

<nav class:isDarkMode={$isDarkMode}>
	<IconButton ariaLabel="go to home" handleClick={() => goto('/')}>
		<HomeIcon />
	</IconButton>
	{#if $page.url.pathname !== '/blog' && !isErrorNav}
		<a href="/blog">blog page</a>
	{/if}
	<IconButton ariaLabel="toggle dark mode" handleClick={toggleDarkMode}>
		{#if $isDarkMode}
			<SunIcon />
		{:else}
			<MoonIcon />
		{/if}
	</IconButton>
</nav>

<style lang="scss">
	nav {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	nav a {
		text-decoration: none;
	}
</style>
