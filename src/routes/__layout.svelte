<script lang="ts">
	import { onMount } from 'svelte';

	import GetIsMobile from '$lib/misc/get-is-mobile.svelte';

	import '../styles/global.scss';
	import '../styles/reset.css';
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
		background-color: $light-bg-a;
	}

	// DARK

	.isDarkMode {
		background-color: $dark-bg-a;
	}
</style>
