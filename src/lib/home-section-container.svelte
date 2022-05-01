<script lang="ts">
	import { onMount } from 'svelte';
	import debounce from 'lodash.debounce';

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
<section bind:this={sectionElement} class={className}>
	<h2>{name}</h2>
	<slot />
</section>

<style>
	section {
		min-height: 100vh;
		padding: 24px 60px;
	}

	h2 {
		text-align: right;
	}
</style>
