<script lang="ts">
	import { onMount } from 'svelte';
	import debounce from 'lodash.debounce';

	export let className = '';
	export let name = '';
	export let updateOffset = (offset: number): void => undefined;

	let innerHeight = 0;
	let sectionElement: HTMLElement;

	onMount(() => {
		updateOffset(innerHeight * 2 + sectionElement.offsetTop);
	});

	const handleResize = debounce(() => {
		updateOffset(innerHeight * 2 + sectionElement.offsetTop);
	}, 300);
</script>

<svelte:window bind:innerHeight on:resize={handleResize} />
<section bind:this={sectionElement} id={name} class={className}>
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
