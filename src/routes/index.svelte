<script lang="ts">
	import debounce from 'lodash.debounce';

	import HomeAboutSection from '$lib/home-about-section.svelte';
	import HomeBlogSection from '$lib/home-blog-section.svelte';
	import HomeContactSection from '$lib/home-contact-section.svelte';
	import HomeLandingSectionContainer from '$lib/home-landing-section-container.svelte';
	import HomeLandingSectionContent from '$lib/home-landing-section-content.svelte';
	import HomeWorkSection from '$lib/home-work-section.svelte';

	let innerHeight: number;
	let scrollY: number;
	let shouldRenderLandingContent = true;

	const handleScroll = debounce(() => {
		if (scrollY > innerHeight * 1.5) {
			shouldRenderLandingContent = false;
		} else {
			shouldRenderLandingContent = true;
		}
	}, 200);
</script>

<svelte:window bind:innerHeight bind:scrollY on:scroll={handleScroll} />
<HomeLandingSectionContainer>
	{#if shouldRenderLandingContent}
		<HomeLandingSectionContent />
	{/if}
</HomeLandingSectionContainer>
<div class="raised">
	<HomeWorkSection />
	<HomeBlogSection />
	<HomeAboutSection />
	<HomeContactSection />
</div>

<style>
	.raised {
		position: relative;
		z-index: 1;
	}
</style>
