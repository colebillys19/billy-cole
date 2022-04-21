<script lang="ts">
	import NameSvg from '../svgComponents/landing-name.svelte';
	import IlluSvgDark from '../svgComponents/landing-illu-dark.svelte';
	import IlluSvgLight from '../svgComponents/landing-illu-light.svelte';
	import store from '../store';

	const { isDarkMode } = store;
</script>

<section class="bgColorA">
	<div class="contentContainer">
		<div class="contentSubcontainer">
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
	</div>
</section>

<style>
	section {
		align-items: center;
		display: flex;
		height: 150vh;
		justify-content: center;
		position: relative;
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
