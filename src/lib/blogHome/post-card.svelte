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
			<h4>{title}</h4>
			<p class="date">{date}</p>
			<p class="reading">{innerWidth < 768 ? excerpt.slice(0, 150) : excerpt}...</p>
		</div>
		{#if innerWidth >= 560}
			<div>
				<RightChevIcon color="#817a99" />
			</div>
		{/if}
	</div>
</a>

<style lang="scss">
	a {
		display: block;
	}

	h4 {
		color: $palette-dark;
		text-shadow: 1px 1px 0 $palette-extra-dark;
	}

	.reading {
		font-weight: 400;
		color: #000000;
	}

	.contentContainer {
		align-items: center;
		border: 1px solid $palette-light;
		box-shadow: -2px 2px 0 $palette-medium;
		display: flex;
		text-align: left;
	}
</style>
