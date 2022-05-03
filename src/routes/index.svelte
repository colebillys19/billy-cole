<script lang="ts">
	import { page } from '$app/stores';

	import HomeAboutSection from '$lib/home-about-section.svelte';
	import HomeBlogSection from '$lib/home-blog-section.svelte';
	import HomeContactSection from '$lib/home-contact-section.svelte';
	import HomeLandingSection from '$lib/home-landing-section.svelte';
	import HomeLandingSectionContainer from '$lib/home-landing-section-container.svelte';
	import HomeNavMenu from '$lib/home-nav-menu.svelte';
	import HomeWorkSection from '$lib/home-work-section.svelte';

	let innerHeight = 0;
	let scrollY = 0;
	let shouldRenderLandingContent = true;

	const handleScroll = () => {
		if (scrollY > innerHeight * 2) {
			shouldRenderLandingContent = false;
		} else {
			shouldRenderLandingContent = true;
		}
	};

	const handleBackToTop = () => {
		shouldRenderLandingContent = true;
		scrollY = 0;
	};
</script>

<svelte:window bind:innerHeight bind:scrollY on:scroll={handleScroll} />
{#if $page.url.pathname !== '/blog'}
	<HomeNavMenu />
{/if}
<HomeLandingSectionContainer>
	{#if shouldRenderLandingContent}
		<HomeLandingSection {scrollY} />
	{/if}
</HomeLandingSectionContainer>
<div class="raised">
	<HomeWorkSection />
	<HomeBlogSection />
	<HomeAboutSection />
	<HomeContactSection {handleBackToTop} />
</div>

<style>
	.raised {
		position: relative;
		z-index: 1;
	}
</style>
