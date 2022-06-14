<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import IconButton from '$lib/misc/icon-button.svelte';

	import HomeIcon from '../../svgComponents/home-icon.svelte';
	import MoonIcon from '../../svgComponents/moon-icon.svelte';
	import store from '../../store';
	import SunIcon from '../../svgComponents/sun-icon.svelte';

	const { isDarkMode } = store;

	export let isErrorNav = false;

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
		<HomeIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} />
	</IconButton>
	{#if $page.url.pathname !== '/blog' && !isErrorNav}
		<a href="/blog">blog page</a>
	{/if}
	<IconButton ariaLabel="toggle dark mode" handleClick={toggleDarkMode}>
		{#if $isDarkMode}
			<SunIcon color="#fffeef" />
		{:else}
			<MoonIcon color="#383d5d" />
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
