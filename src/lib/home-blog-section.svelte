<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { isDarkMode, blogOffset } = store;

	const updateOffset = (offset: number): void => {
		blogOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="blog" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<a href="/blog">blog</a>
	</div>
</HomeSectionContainer>

<style lang="scss">
	// dark

	.isDarkMode a {
		color: $palette-a;
	}
</style>
