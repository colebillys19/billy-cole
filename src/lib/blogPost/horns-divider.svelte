<script lang="ts">
	import store from '../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="container">
	<div class="thicc" />
	<span>&#x1F918;</span>
</div>

<style lang="scss">
	span {
		margin-left: 12px;
		font-size: 32px;
	}

	.container {
		align-items: center;
		display: flex;
		margin-bottom: 48px;
		width: 100%;
	}

	.thicc {
		background-color: $palette-medium;
		flex-grow: 1;
		height: 5px;
	}

	// DARK

	.isDarkMode .thicc {
		background-color: $palette-light;
	}
</style>
