<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	import WarningIcon from '../svgComponents/warning-icon.svelte';

	export const load: Load = ({ error }) => ({
		props: { error }
	});
</script>

<script lang="ts">
	import GetIsMobile from '$lib/misc/get-is-mobile.svelte';
	import NavMenu from '$lib/blogHome/nav-menu.svelte';

	import store from '../store';

	const { isDarkMode } = store;

	export let error = { message: '' };
</script>

<GetIsMobile />
<NavMenu isErrorNav />
<div class:isDarkMode={$isDarkMode} class="container">
	<div class="headingContainer">
		<WarningIcon color={$isDarkMode ? '#e68a6e' : '#bb77a2'} />
		<h1>404</h1>
	</div>
	<p>{error.message}</p>
</div>

<style lang="scss">
	h1 {
		bottom: 3px;
		color: $palette-extra-dark;
		font-size: 48px;
		margin-left: 12px;
		position: relative;
		text-shadow: 2px 2px 0 #000000;
	}

	p {
		color: $palette-extra-dark;
	}

	.container {
		margin: 0 auto;
		max-width: 1200px;
		min-height: calc(100vh - 80px);
		padding: 0 60px 96px;
		text-align: center;
	}

	.headingContainer {
		align-items: center;
		display: inline-flex;
		margin-bottom: 24px;
	}

	// DARK

	.isDarkMode h1 {
		color: $palette-extra-light;
		text-shadow: 2px 2px 0 $palette-medium;
	}
</style>
