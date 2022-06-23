<script lang="ts">
	import PostList from '$lib/blogHome/post-list.svelte';

	import store from '../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="container">
	<div class="headingContainer">
		<!-- <div class="absStripesAnchor">
			<div class="absStripes" />
		</div> -->
		<h1>blog</h1>
		<div class="stripes" />
	</div>
	<PostList isFullList />
</div>

<style lang="scss">
	h1 {
		color: $palette-extra-dark;
		text-shadow: 2px 2px 0 #000000;
	}

	.container {
		margin: 0 auto;
		max-width: 1200px;
		padding: 0 60px 96px;
	}

	.headingContainer {
		align-items: center;
		display: flex;
		margin-bottom: 24px;
	}

	.stripes {
		background-color: $palette-light;
		box-shadow: 3px 3px 0 $palette-medium, 6px 6px 0 $palette-dark;
		flex-grow: 1;
		height: 3px;
		margin-left: 30px;
		position: relative;
		right: 6px;
	}

	// .absStripesAnchor {
	// 	position: relative;
	// }

	// .absStripes {
	// 	background-color: $palette-light;
	// 	box-shadow: 3px 3px 0 $palette-medium, 6px 6px 0 $palette-dark;
	// 	height: 3px;
	// 	left: calc(-100vw - 30px);
	// 	position: absolute;
	// 	top: -1px;
	// 	width: 100vw;
	// }

	// DARK

	.isDarkMode h1 {
		color: $palette-extra-light;
		text-shadow: 2px 2px 0 $palette-medium;
	}
</style>
