<script lang="ts">
	export let title = '';
</script>

<div class="blogPostContainer">
	<h1>{title}</h1>
	<slot />
</div>

<style global lang="scss">
	h1 {
		margin-bottom: 30px;
	}

	p {
		margin-bottom: 30px;
	}

	.blogPostContainer {
		padding: 0 24px;
	}

	.divider {
		border-bottom: 1px solid $palette-g;
		height: 30px;
		margin-bottom: 30px;
		width: 100%;
	}

	@media (min-width: 480px) {
		.blogPostContainer {
			padding: 0 48px;
		}
	}

	@media (min-width: 768px) {
		.blogPostContainer {
			padding: 0 72px;
		}
	}

	@media (min-width: 1024px) {
		.blogPostContainer {
			padding: 0 96px;
		}
	}
</style>
