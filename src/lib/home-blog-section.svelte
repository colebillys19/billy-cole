<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { blogOffset } = store;

	const updateOffset = (offset: number): void => {
		blogOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="blog" {updateOffset}>
	<a href="/blog">blog</a>
</HomeSectionContainer>
