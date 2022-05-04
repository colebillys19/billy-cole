<script lang="ts">
	import { onMount } from 'svelte';

	import GetIsMobile from '$lib/get-is-mobile.svelte';
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

<GetIsMobile />
<main class:isDarkMode={$isDarkMode}>
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $palette-a;
		min-height: 100vh;
	}
</style>
