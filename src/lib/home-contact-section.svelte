<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';

	export let handleBackToTop: () => void;
</script>

<HomeSectionContainer className="bgColorA" name="contact">
	<button on:click={handleBackToTop}>back to top</button>
</HomeSectionContainer>
