<script lang="ts">
	import RightChevIcon from '../../svgComponents/right-chev-icon.svelte';
	import store from '../../store';

	const { isDarkMode } = store;

	export let date = '';
	export let excerpt = '';
	export let path = '';
	export let title = '';

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<a href={`/blog/${path}`}>
	<div class:isDarkMode={$isDarkMode} class="contentContainer">
		<div>
			<h3>{title}</h3>
			<p class="date">{date}</p>
			<p class="reading">{innerWidth < 768 ? excerpt.slice(0, 150) : excerpt}...</p>
		</div>
		{#if innerWidth >= 560}
			<div>
				<RightChevIcon />
			</div>
		{/if}
	</div>
</a>

<style lang="scss">
	a {
		display: block;
		text-decoration: none;
	}

	.contentContainer {
		align-items: center;
		border: 1px solid blue;
		box-shadow: -2px 2px 0 blue;
		color: blue;
		display: flex;
		text-align: left;
	}
</style>
