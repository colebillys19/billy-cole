<script lang="ts">
	import store from '../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class={$$props.class}>
	<code>
		<slot />
	</code>
</div>

<style lang="scss">
	div {
		background-color: #ffffff;
		border: 1px solid $palette-medium;
		color: #000000;
		margin-bottom: 24px;
		padding: 24px 48px;
	}

	code {
		white-space: pre-wrap;
	}

	.lessBottomMargin {
		margin-bottom: 10px;
	}

	.inline {
		display: inline-block;
	}

	// DARK

	.isDarkMode {
		background-color: #000000;
		border: 1px solid $palette-light;
	}

	.isDarkMode code {
		color: #ffffff;
	}
</style>
