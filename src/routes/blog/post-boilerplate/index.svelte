<script lang="ts">
	import PostFooter from '$lib/blog-post-footer.svelte';

	import store from '../../../store';
	import snippetStylesDark from '../../../styles/codeSnippetStyles/dark';
	import snippetStylesLight from '../../../styles/codeSnippetStyles/light';

	const { isDarkMode } = store;
</script>

<svelte:head>
	{@html $isDarkMode ? snippetStylesDark : snippetStylesLight}
</svelte:head>
<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>heading</h1>
	<p>paragraph</p>
</div>
<PostFooter />

<style src="../../../styles/blog-post-styles.scss"></style>
