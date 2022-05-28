<script lang="ts">
	import { onMount } from 'svelte';
	import debounce from 'lodash.debounce';

	import store from '../store';

	const { isDarkMode } = store;

	export let className = '';
	export let name = '';
	export let updateOffset = (offset: number): void => undefined;

	let sectionElement: HTMLElement;

	onMount(() => {
		if (sectionElement.parentElement) {
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
<section bind:this={sectionElement} class:isDarkMode={$isDarkMode} class={className}>
	<div class="contentContainer">
		<h2>{name}</h2>
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		min-height: 100vh;
		padding: 10px 60px 24px;
	}

	h2 {
		line-height: 60px;
		text-align: right;
	}

	.bgColorA {
		background-color: $palette-a;
	}

	.bgColorB {
		background-color: $palette-b;
	}

	.contentContainer {
		margin: 0 auto;
		max-width: 1200px;
		text-align: center;
	}

	// dark

	.isDarkMode h2 {
		color: $palette-a;
	}

	.isDarkMode.bgColorA {
		background-color: $palette-g;
	}

	.isDarkMode.bgColorB {
		background-color: $palette-f;
	}

	@media (min-width: 768px) {
		.contentContainer {
			text-align: left;
		}
	}
</style>
