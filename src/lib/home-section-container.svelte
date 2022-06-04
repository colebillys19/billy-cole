<script lang="ts">
	import { onMount, tick } from 'svelte';
	import debounce from 'lodash.debounce';

	import store from '../store';

	const { isDarkMode } = store;

	export let className = '';
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
<section bind:this={sectionElement} class:isDarkMode={$isDarkMode} class={className}>
	<div class="contentContainer">
		<h2>{name}</h2>
		<slot />
	</div>
</section>

<style lang="scss">
	section {
		min-height: 100vh;
	}

	h2 {
		text-align: right;
	}

	.bgColorA {
		background-color: $lightBgA;
	}

	.bgColorB {
		background-color: $lightBgB;
	}

	.contentContainer {
		margin: 0 auto;
		max-width: 1200px;
		text-align: center;
	}
</style>
