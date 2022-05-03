<script lang="ts">
	import store from '../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogContainer">
	<h1>blog</h1>
	<div>
		<a href="/blog/vue-vs-svelte">vue vs svelte</a>
	</div>
</div>

<style lang="scss">
	.blogContainer {
		padding: 0 60px;
	}

	/* dark */

	.isDarkMode h1 {
		color: $palette-a;
	}

	.isDarkMode a {
		color: $palette-a;
	}
</style>
