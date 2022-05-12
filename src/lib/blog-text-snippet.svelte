<script lang="ts">
	import store from '../store';

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
		border-color: $palette-e;
		border-style: solid;
		border-width: 1px;
		box-shadow: 1px 1px 1px rgba(129, 122, 153, 0.5);
		color: #000000;
		margin-bottom: 30px;
		padding: 30px 60px;
	}

	code {
		white-space: pre-wrap;
	}

	.isDarkMode {
		background-color: #000000;
		border-color: $palette-a;
		box-shadow: 1px 1px 1px rgba(255, 254, 239, 0.5);
		color: #ffffff;
	}

	.lessBottomMargin {
		margin-bottom: 10px;
	}

	.inline {
		display: inline-block;
	}
</style>
