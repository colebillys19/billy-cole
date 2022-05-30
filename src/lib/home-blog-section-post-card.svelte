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
				<RightChevIcon />
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
		border-left: 3px solid $palette-c;
		box-shadow: 1px 1px 1px $palette-b;
		color: $palette-g;
		display: flex;
		margin-bottom: 54px;
		padding: 10px;
		text-align: left;
	}

	.contentSubcontainer {
		padding: 8px 24px;
	}

	.date {
		font-size: 12px;
		margin-bottom: 12px;
	}

	// dark

	.isDarkMode {
		box-shadow: 1px 1px 1px $palette-e;
	}

	.isDarkMode h4,
	.isDarkMode p {
		color: $palette-a;
	}
</style>
