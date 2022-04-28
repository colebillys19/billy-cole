<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { contactOffset } = store;

	export let handleBackToTop: () => void;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="contact" {updateOffset}>
	<button on:click={handleBackToTop}>back to top</button>
</HomeSectionContainer>
