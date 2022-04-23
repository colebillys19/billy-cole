<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';

	let scrollY = 0;

	const handleBackToTop = () => {
		scrollY = 0;
	};
</script>

<svelte:window bind:scrollY />
<HomeSectionContainer className="bgColorA" name="contact">
	<button on:click={handleBackToTop}>back to top</button>
</HomeSectionContainer>
