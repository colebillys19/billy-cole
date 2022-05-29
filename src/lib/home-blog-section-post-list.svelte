<script lang="ts">
	import PostCard from '$lib/home-blog-section-post-card.svelte';

	import blogData from '../blogData';

	const slicedData = blogData.slice(0, 3);
</script>

<ul>
	{#each slicedData as dataObj}
		<PostCard
			date={dataObj.date}
			excerpt={dataObj.excerpt}
			path={dataObj.path}
			title={dataObj.title}
		/>
	{/each}
</ul>

<style></style>
