<script lang="ts">
	import blogData from '../../blogData';

	import PostCard from './post-card.svelte';

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
