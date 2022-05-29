<script lang="ts">
	import store from '../store';
	import RightChevIcon from '../svgComponents/right-chev-icon.svelte';

	const { isDarkMode } = store;

	export let date = '';
	export let excerpt = '';
	export let path = '';
	export let title = '';
</script>

<a href={`/blog/${path}`}>
	<div class:isDarkMode={$isDarkMode} class="contentContainer">
		<div class="contentSubcontainer">
			<h4>{title}</h4>
			<p class="date">{date}</p>
			<p>{excerpt}</p>
		</div>
		<div>
			<RightChevIcon />
		</div>
	</div>
</a>

<!-- fill={$isDarkMode ? '#fffeef' : '#383d5d'} -->
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
		color: $palette-g;
		display: flex;
		margin-bottom: 54px;
		padding: 10px;
	}

	.contentSubcontainer {
		padding: 6px 16px;
	}

	.date {
		font-size: 12px;
		margin-bottom: 12px;
	}

	// dark

	.isDarkMode h4,
	.isDarkMode p {
		color: $palette-a;
	}
</style>
