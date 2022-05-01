<script lang="ts">
	import store from '../store';

	export let title = '';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>{title}</h1>
	<slot />
</div>

<style global lang="scss">
	h1,
	h2,
	p {
		margin-bottom: 30px;
	}

	p {
		font-size: 18px;
	}

	.blogPostContainer {
		padding: 0 24px 96px;
	}

	.divider {
		border-bottom: 1px solid $palette-g;
		height: 30px;
		margin-bottom: 30px;
		width: 100%;
	}

	// dark styles

	.isDarkMode a {
		color: $palette-b;
	}

	.isDarkMode h1,
	.isDarkMode h2,
	.isDarkMode p {
		color: $palette-a;
	}

	.isDarkMode .divider {
		border-bottom: 1px solid $palette-a;
	}

	@media (min-width: 480px) {
		.blogPostContainer {
			padding: 0 48px 96px;
		}
	}

	@media (min-width: 768px) {
		.blogPostContainer {
			padding: 0 72px 96px;
		}
	}

	@media (min-width: 1024px) {
		.blogPostContainer {
			padding: 0 96px 96px;
		}
	}
</style>
