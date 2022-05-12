<script lang="ts">
	import { onMount } from 'svelte';

	import GetIsMobile from '$lib/get-is-mobile.svelte';
	import '../styles/reset.css';
	import '../styles/global.scss';
	import store from '../store';

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
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $palette-a;
	}
</style>
