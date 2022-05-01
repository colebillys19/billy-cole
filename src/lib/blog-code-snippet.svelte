<!-- code taken from svelte-hightlight package: https://github.com/metonym/svelte-highlight -->
<script lang="ts">
	export let code: any = undefined;
	export let langtag = false;
	export let noMargin = false;

	import hljs from 'highlight.js';
	import { createEventDispatcher, afterUpdate } from 'svelte';

	import snippetStylesDark from '../styles/codeSnippetStyles/dark';
	import snippetStylesLight from '../styles/codeSnippetStyles/light';
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

<svelte:head>
	{@html $isDarkMode ? snippetStylesDark : snippetStylesLight}
</svelte:head>
<slot {highlighted}>
	<pre
		class:langtag
		class:noMargin
		data-language={(language && language) || 'plaintext'}
		{...$$restProps}><code class="hljs"
			>{#if highlighted !== undefined}{@html highlighted}{:else}{code}{/if}</code
		></pre>
</slot>

<style>
	code {
		padding: 30px !important;
	}

	pre {
		margin: 0 0 30px 0;
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
</style>
