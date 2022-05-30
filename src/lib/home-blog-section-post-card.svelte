<script lang="ts">
	import store from '../store';
	import RightChevIcon from '../svgComponents/right-chev-icon.svelte';

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
		<div class="contentSubcontainer">
			<h4>{title}</h4>
			<p class="date">{date}</p>
			<p>{innerWidth < 768 ? excerpt.slice(0, 150) : excerpt}...</p>
		</div>
		{#if innerWidth >= 560}
			<div>
				<RightChevIcon color={$isDarkMode ? '#f2c3ad' : '#bb77a2'} />
			</div>
		{/if}
	</div>
</a>

<style lang="scss">
	a {
		text-decoration: none;
	}

	h4 {
		font-size: 20px;
	}

	.contentContainer {
		align-items: center;
		// border-bottom: 3px solid $palette-c;
		border: 1px solid $palette-b;
		box-shadow: -2px 2px 0 $palette-c;
		color: $palette-g;
		display: flex;
		margin-bottom: 54px;
		padding: 10px;
		text-align: left;
	}

	.contentSubcontainer {
		padding: 8px 24px 10px;
	}

	.date {
		color: $palette-d;
		font-size: 12px;
		margin-bottom: 12px;
	}

	// dark

	.isDarkMode {
		border: 1px solid $palette-e;
	}

	.isDarkMode h4,
	.isDarkMode p {
		color: $palette-a;
	}

	.isDarkMode .date {
		color: $palette-b;
	}
</style>
