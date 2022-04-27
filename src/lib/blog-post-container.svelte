<script lang="ts">
	export let title = '';
</script>

<div class="blogPostContainer">
	<h1>{title}</h1>
	<slot />
</div>

<style>
	:global(p) {
		margin-bottom: 30px;
	}

	.blogPostContainer {
		padding: 0 60px;
	}

	@media (min-width: 768px) {
		.blogPostContainer {
			padding: 0 80px;
		}
	}

	@media (min-width: 1024px) {
		.blogPostContainer {
			padding: 0 160px;
		}
	}
</style>
