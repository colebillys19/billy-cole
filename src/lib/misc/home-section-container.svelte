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
		<h2>{name}</h2>
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		background-color: $light-bg-a;
		min-height: 100vh;
		padding: 24px 0 96px;
	}

	h2 {
		color: $palette-extra-dark;
		font-size: 36px;
		margin-bottom: 24px;
		text-align: right;
		text-shadow: 1px 1px 0 #000000;
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

	// DARK

	.isDarkMode {
		background-color: $dark-bg-a;
	}

	.isDarkMode.isAltColor {
		background-color: $dark-bg-b;
	}

	.isDarkMode h2 {
		color: $light-bg-b;
		text-shadow: 1px 1px 0 #ffffff;
	}
</style>
