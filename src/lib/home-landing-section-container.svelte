<script lang="ts">
	import store from '../store';

	const { isDarkMode } = store;
</script>

<section class:isDarkMode={$isDarkMode}>
	<slot />
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		height: 150vh;
		justify-content: center;
		position: relative;
	}

	// dark

	.isDarkMode {
		background-color: $palette-g;
	}
</style>
