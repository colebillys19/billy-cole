<script lang="ts">
	import HomeAboutSection from '$lib/home-about-section.svelte';
	import HomeBlogSection from '$lib/home-blog-section.svelte';
	import HomeContactSection from '$lib/home-contact-section.svelte';
	import HomeLandingSectionContainer from '$lib/home-landing-section-container.svelte';
	import HomeLandingSectionDynamic from '$lib/home-landing-section-dynamic.svelte';
	import HomeLandingSectionStatic from '$lib/home-landing-section-static.svelte';
	import HomeWorkSection from '$lib/home-work-section.svelte';

	$: innerHeight = 0;
	$: scrollY = 0;
	$: shouldRenderLandingContent = true;

	const handleScroll = () => {
		if (scrollY > innerHeight * 1.5) {
			shouldRenderLandingContent = false;
		} else {
			shouldRenderLandingContent = true;
		}
	};
</script>

<svelte:window bind:innerHeight bind:scrollY on:scroll={handleScroll} />
<HomeLandingSectionContainer>
	{#if shouldRenderLandingContent}
		<HomeLandingSectionDynamic {scrollY} />
	{:else}
		<HomeLandingSectionStatic />
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
