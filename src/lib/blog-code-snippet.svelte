<!-- code taken from svelte-hightlight package: https://github.com/metonym/svelte-highlight -->
<script lang="ts">
	export let code: any = undefined;
	export let caption = '';
	export let langtag = false;
	export let noMargin = false;

	import hljs from 'highlight.js';
	import { createEventDispatcher, afterUpdate } from 'svelte';

	import store from '../store';

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
		padding: 30px !important;
	}

	figure {
		margin: 0 0 30px 0;
	}

	figcaption {
		font-family: 'Roboto', sans-serif;
		font-size: 18px;
	}

	pre {
		border-color: $palette-e;
		border-style: solid;
		border-width: 1px;
		margin: 0;
		box-shadow: 1px 1px 1px rgba(129, 122, 153, 0.5);
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

	.isDarkMode pre {
		border-color: $palette-a;
		box-shadow: 1px 1px 1px rgba(255, 254, 239, 0.5);
	}

	.isDarkMode figcaption {
		color: $palette-a;
	}
</style>
