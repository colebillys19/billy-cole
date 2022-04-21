<script lang="ts">
	import NameSvg from '../svgComponents/landing-name.svelte';
	import IlluSvgDark from '../svgComponents/landing-illu-dark.svelte';
	import IlluSvgLight from '../svgComponents/landing-illu-light.svelte';
	import store from '../store';

	const { isDarkMode } = store;
</script>

<section class="bgColorA">
	<div class="contentContainer">
		<div class="nameContainer">
			<NameSvg color={$isDarkMode ? '#fffeef' : '#383d5d'} />
		</div>
		<div class="illuContainer">
			{#if $isDarkMode}
				<IlluSvgLight />
			{:else}
				<IlluSvgDark />
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		align-items: center;
		display: flex;
		height: 100vh;
		justify-content: center;
		padding: 30px;
	}

	.contentContainer {
		column-gap: 60px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		height: 100vw;
		max-width: 1200px;
		row-gap: 30px;
		width: 100vw;
	}

	.illuContainer {
		grid-column-end: 6;
		grid-column-start: 1;
		grid-row-end: 6;
		grid-row-start: 1;
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
		section {
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
