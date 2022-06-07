<!-- code taken from svelte-hightlight package: https://github.com/metonym/svelte-highlight -->
<script lang="ts">
	export let code: any = undefined;
	export let caption = '';
	export let langtag = false;
	export let noMargin = false;

	import hljs from 'highlight.js';
	import { createEventDispatcher, afterUpdate } from 'svelte';

	import store from '../../store';

	const { isDarkMode } = store;

	const dispatch = createEventDispatcher();

	let highlighted: any = undefined;
	let language: any = undefined;

	afterUpdate(() => {
		if (highlighted) dispatch('highlight', { highlighted });
	});

	$: if (code) {
		({ value: highlighted, language } = hljs.highlightAuto(code));
	}
</script>

<slot {highlighted}>
	<figure class:isDarkMode={$isDarkMode} class:noMargin>
		{#if caption}
			<figcaption>{caption}</figcaption>
		{/if}
		<pre class:langtag data-language={(language && language) || 'plaintext'} {...$$restProps}><code
				class="hljs"
				>{#if highlighted !== undefined}{@html highlighted}{:else}{code}{/if}</code
			></pre>
	</figure>
</slot>

<style lang="scss">
	code {
		font-size: 16px;
		padding: 24px !important;
	}

	figure {
		margin: 0 0 48px 0;
	}

	figcaption {
		font-family: 'Roboto', sans-serif;
	}

	pre {
		border: 1px solid $palette-medium;
		margin: 0;
	}

	pre.langtag {
		position: relative;
	}

	pre.langtag::after {
		content: attr(data-language);
		position: absolute;
		top: 0;
		right: 0;
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		background: inherit;
		color: inherit;
		background: var(--hljs-background);
		color: var(--hljs-foreground);
		border-radius: var(--hljs-radius);
	}

	.noMargin {
		margin: 0;
	}

	// DARK

	.isDarkMode figcaption {
		color: $palette-extra-light;
	}

	.isDarkMode pre {
		border: 1px solid $palette-light;
	}

	@media (min-width: 768px) {
		code {
			font-size: 18px;
		}
	}
</style>
