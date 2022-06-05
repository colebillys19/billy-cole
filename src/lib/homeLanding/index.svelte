<script lang="ts">
	import IlluSvg from '../../svgComponents/landing-illu.svelte';
	import store from '../../store';

	import DynamicHeading from './dynamic-heading.svelte';

	const { isDarkMode } = store;

	export let scrollY = 0;
</script>

<div class:isDarkMode={$isDarkMode} class="contentContainer">
	<div class="contentSubcontainer">
		<div class="nameContainer" style={`top: -${scrollY / 4}px;`}>
			<DynamicHeading />
		</div>
		<div class="illuContainer" style={`top: -${scrollY / 16}px;`}>
			<IlluSvg />
		</div>
	</div>
</div>

<style lang="scss">
	.contentContainer {
		clip-path: inset(0 40px 0 0);
		height: 100vh;
		padding: 40px;
		pointer-events: none;
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
		border-right: 4px solid $palette-extra-dark;
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
