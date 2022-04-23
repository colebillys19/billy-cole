<script lang="ts">
	import { fade } from 'svelte/transition';

	import store from '../store';
	import IlluSvg from '../svgComponents/landing-illu.svelte';

	const { isDarkMode } = store;

	export let scrollY: number = 0;

	$: mouseInitialX = -1;
	$: mouseInitialY = -1;
	$: mouseX = 0;
	$: mouseY = 0;

	const handleMouseMove = (e: MouseEvent) => {
		if (mouseInitialX === -1) {
			mouseInitialX = e.clientX;
			mouseInitialY = e.clientY;
		}
		mouseX = e.clientX;
		mouseY = e.clientY;
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div in:fade={{ duration: 300 }} class="contentContainer">
	<div class="contentSubcontainer">
		<div class="nameContainer">
			<h1
				class={$isDarkMode ? 'lightFont' : 'darkFont'}
				style={`transform: translate(${(mouseInitialX - mouseX) / -120}px, ${
					(mouseInitialY - mouseY) / -160 - scrollY / 4
				}px);`}
			>
				Billy Cole
			</h1>
		</div>
		<div class={`illuContainer ${$isDarkMode ? 'lightBorder' : 'darkBorder'}`}>
			<IlluSvg
				offsetX={(mouseInitialX - mouseX) / 360}
				offsetY={(mouseInitialY - mouseY) / 320 - scrollY / 16}
			/>
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		font-size: 48px;
	}

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

	.darkFont {
		color: $palette-g;
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

	.lightFont {
		color: $palette-a;
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
