<script lang="ts">
	import { fade } from 'svelte/transition';

	import store from '../store';
	import NameSvg from '../svgComponents/landing-name.svelte';
	import IlluSvg from '../svgComponents/landing-illu.svelte';

	const { isDarkMode } = store;

	export let scrollY = 0;
</script>

<div in:fade={{ duration: 300 }} class="contentContainer">
	<div class="contentSubcontainer">
		<div class="nameContainer">
			<NameSvg scrollOffset={scrollY / -4} />
		</div>
		<div class={`illuContainer ${$isDarkMode ? 'lightBorder' : 'darkBorder'}`}>
			<IlluSvg scrollOffset={scrollY / -16} />
		</div>
	</div>
</div>

<style lang="scss">
	.contentContainer {
		height: 100vh;
		padding: 40px;
		position: fixed;
		top: 0;
	}

	.contentSubcontainer {
		column-gap: 60px;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(6, 1fr);
		height: 100%;
		max-width: 1200px;
		position: relative;
		row-gap: 30px;
		width: 100%;
	}

	.darkBorder {
		border-right-color: $palette-f;
	}

	.illuContainer {
		border-right-style: solid;
		border-right-width: 4px;
		grid-column-end: 6;
		grid-column-start: 1;
		grid-row-end: 6;
		grid-row-start: 1;
		overflow: hidden;
		padding: 30px;
		position: relative;
	}

	.lightBorder {
		border-right-color: $palette-b;
	}

	.nameContainer {
		align-items: center;
		display: flex;
		grid-column-end: 5;
		grid-column-start: 2;
		grid-row-end: 7;
		grid-row-start: 6;
	}

	@media (min-width: 768px) {
		.contentContainer {
			padding: 60px;
		}

		.illuContainer {
			grid-column-end: 6;
			grid-column-start: 3;
			grid-row-end: 7;
			grid-row-start: 1;
		}

		.nameContainer {
			grid-column-end: 3;
			grid-column-start: 1;
			grid-row-end: 7;
			grid-row-start: 1;
		}
	}
</style>
