<script lang="ts">
	import store from '../store';
	import ArrowUpIcon from '../svgComponents/arrow-up-icon.svelte';

	const { isDarkMode } = store;

	export let handleBackToTop: () => void;
</script>

<div class:isDarkMode={$isDarkMode}>
	<button on:click={handleBackToTop}>
		<span>back to top</span>
		<ArrowUpIcon color={$isDarkMode ? '#f2c3ad' : '#5d5c7b'} />
	</button>
</div>

<style lang="scss">
	div {
		background-color: $palette-b;
		padding: 24px;
		text-align: center;
	}

	button {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		display: flex;
		margin: 0 auto;
	}

	button:hover {
		cursor: pointer;
	}

	span {
		color: $palette-f;
		font-size: 20px;
		margin-right: 10px;
	}

	// dark

	.isDarkMode {
		background-color: $palette-f;
	}

	.isDarkMode span {
		color: $palette-b;
	}
</style>
