<script lang="ts">
	import { onMount, tick } from 'svelte';
	import debounce from 'lodash.debounce';

	import store from '../../store';

	const { isDarkMode } = store;

	export let isAltColor = false;
	export let name = '';
	export let updateOffset = (offset: number): void => undefined;

	let sectionElement: HTMLElement;

	onMount(async () => {
		if (sectionElement.parentElement) {
			await tick();
			updateOffset(sectionElement.parentElement.offsetTop + sectionElement.offsetTop);
		}
	});

	const handleResize = debounce(() => {
		if (sectionElement.parentElement) {
			updateOffset(sectionElement.parentElement.offsetTop + sectionElement.offsetTop);
		}
	}, 300);
</script>

<svelte:window on:resize={handleResize} />
<section bind:this={sectionElement} class:isAltColor class:isDarkMode={$isDarkMode}>
	<div class="contentContainer">
		<div class="headingContainer">
			<div class="divider" />
			<h2>{name}</h2>
		</div>
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		background-color: $light-bg-a;
		min-height: 100vh;
		padding: 72px 0 96px;
	}

	h2 {
		color: $palette-extra-dark;
		line-height: 22px;
		margin-left: 24px;
		text-shadow: 2px 2px 0 $palette-dark;
	}

	.isAltColor {
		background-color: $light-bg-b;
	}

	.contentContainer {
		margin: 0 auto;
		max-width: 1200px;
		padding: 0 58px;
		text-align: center;
	}

	.headingContainer {
		align-items: center;
		display: flex;
		margin-bottom: 72px;
	}

	.divider {
		background-color: $palette-light;
		box-shadow: 3px 3px 0 $palette-medium, 6px 6px 0 $palette-dark;
		flex-grow: 1;
		height: 3px;
	}

	// DARK

	.isDarkMode {
		background-color: $dark-bg-a;
	}

	.isDarkMode.isAltColor {
		background-color: $dark-bg-b;
	}

	.isDarkMode h2 {
		color: $palette-extra-light;
		text-shadow: 2px 2px 0 $palette-medium;
	}

	@media (min-width: 768px) {
		h2 {
			line-height: 26px;
		}
	}
</style>
