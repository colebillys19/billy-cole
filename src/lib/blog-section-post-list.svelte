<script lang="ts">
	import PostCard from '$lib/blog-section-post-card.svelte';

	import blogData from '../blogData';

	export let isFullList = false;

	const data = isFullList ? blogData : blogData.slice(0, 3);
</script>

<ul>
	{#each data as dataObj}
		<PostCard
			date={dataObj.date}
			excerpt={dataObj.excerpt}
			path={dataObj.path}
			title={dataObj.title}
		/>
	{/each}
</ul>

<style>
	ul {
		padding: 0;
	}
</style>
