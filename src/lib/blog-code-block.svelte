<script lang="ts">
	export let noMargin = false;
</script>

<pre class:noMargin>
	<code>
		<slot />
	</code>
</pre>

<style lang="scss">
	pre {
		background-color: $palette-f;
		color: $palette-a;
		display: block;
		display: flex;
		margin: 0 0 30px 0;
		overflow-x: auto;
		padding: 0 48px;
	}

	code {
		font-family: 'Roboto Mono', monospace;
		margin-top: -23px;
	}

	.noMargin {
		margin: 0;
	}
</style>
