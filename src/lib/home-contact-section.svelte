<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { contactOffset, isDarkMode } = store;

	export let handleBackToTop: () => void;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="contact" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<p>yes</p>
		<button on:click={handleBackToTop}>back to top</button>
	</div>
</HomeSectionContainer>

<style lang="scss">
	// dark

	.isDarkMode p {
		color: $palette-a;
	}
</style>
