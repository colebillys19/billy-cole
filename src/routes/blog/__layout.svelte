<script lang="ts">
	import { onMount } from 'svelte';

	import GetIsMobile from '$lib/get-is-mobile.svelte';
	import NavMenu from '$lib/blog-nav-menu.svelte';
	import store from '../../store';
	import '../../styles/reset.css';
	import '../../styles/global.scss';

	const { isDarkMode } = store;

	onMount(() => {
		if (localStorage.getItem('isDarkMode')) {
			isDarkMode.set(true);
		}
	});
</script>

<GetIsMobile />
<NavMenu />
<main class:isDarkMode={$isDarkMode}>
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $palette-a;
		min-height: calc(100vh - 80px);
	}

	// dark

	.isDarkMode {
		background-color: $palette-g;
	}
</style>
