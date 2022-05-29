<script lang="ts">
	import NameHeading from '$lib/home-landing-section-desktop-heading.svelte';

	import store from '../store';
	import IlluSvg from '../svgComponents/landing-illu.svelte';

	const { isLandingAnimationDisabled, isDarkMode } = store;

	export let scrollY = 0;

	let mouseInitialX = -1;
	let mouseInitialY = 0;
	let mouseX = 0;
	let mouseY = 0;

	$: $isLandingAnimationDisabled, resetMouseValues();

	const resetMouseValues = () => {
		if ($isLandingAnimationDisabled) {
			mouseInitialX = -1;
			mouseInitialY = 0;
			mouseX = 0;
			mouseY = 0;
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!$isLandingAnimationDisabled) {
			if (mouseInitialX === -1) {
				mouseInitialX = e.clientX;
				mouseInitialY = e.clientY;
			}
			mouseX = e.clientX;
			mouseY = e.clientY;
		}
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div class:isDarkMode={$isDarkMode} class="contentContainer">
	<div class="contentSubcontainer">
		<div class="nameContainer" style={`top: -${scrollY / 4}px;`}>
			<NameHeading
				offsetX={(mouseInitialX - mouseX) / -120}
				offsetY={(mouseInitialY - mouseY) / -160}
			/>
		</div>
		<div class="illuContainer" style={`top: -${scrollY / 16}px;`}>
			<IlluSvg offsetX={(mouseInitialX - mouseX) / 360} offsetY={(mouseInitialY - mouseY) / 320} />
		</div>
	</div>
</div>

<style lang="scss">
	.contentContainer {
		clip-path: inset(0 40px 0 0);
		height: 100vh;
		min-width: 360px;
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

	.isAnimationDisabled {
		transform: translate(0, 0);
		transition: transform 320ms ease-in-out;
	}

	// dark

	.isDarkMode .illuContainer {
		border-right-color: $palette-b;
	}

	@media (min-width: 768px) {
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
</style>
