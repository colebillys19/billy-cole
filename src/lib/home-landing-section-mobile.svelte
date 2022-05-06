<script lang="ts">
	import store from '../store';
	import IlluSvg from '../svgComponents/landing-illu.svelte';

	const { isDarkMode, isMobile } = store;

	export let scrollY: number = 0;
</script>

<div class:isDarkMode={$isDarkMode} class="contentContainer">
	<div class="contentSubcontainer">
		<div class="nameContainer">
			<h1 style={`transform: translateY(${scrollY / -4}px);`}>Billy Cole</h1>
		</div>
		<div class="illuContainer">
			<IlluSvg isMobile={$isMobile === 1} offsetY={scrollY / -16} />
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		font-size: 32px;
		white-space: nowrap;
	}

	.contentContainer {
		clip-path: inset(0 40px 0 0);
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

	.illuContainer {
		border-right-style: solid;
		border-right-width: 4px;
		border-right-color: $palette-f;
		grid-column-end: 6;
		grid-column-start: 1;
		grid-row-end: 6;
		grid-row-start: 1;
		position: relative;
	}

	.nameContainer {
		align-items: center;
		display: flex;
		grid-column-end: 5;
		grid-column-start: 2;
		grid-row-end: 7;
		grid-row-start: 6;
		justify-content: center;
		position: relative;
	}

	// dark

	.isDarkMode h1 {
		color: $palette-a;
	}

	.isDarkMode .illuContainer {
		border-right-color: $palette-b;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 48px;
		}

		.contentContainer {
			clip-path: inset(0 60px 0 0);
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
			justify-content: flex-start;
		}
	}

	@media (orientation: landscape) {
		h1 {
			font-size: 32px;
		}

		.nameContainer {
			left: 10px;
		}
	}
</style>
