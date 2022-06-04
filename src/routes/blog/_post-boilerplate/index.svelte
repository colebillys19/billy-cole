<script lang="ts">
	import PostFooter from '$lib/blogPost/post-footer.svelte';

	import snippetStylesDark from '../../../styles/codeSnippetStyles/dark';
	import snippetStylesLight from '../../../styles/codeSnippetStyles/light';
	import store from '../../../store';

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
