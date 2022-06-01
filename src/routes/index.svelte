<script lang="ts">
	import HomeAboutSection from '$lib/home-about-section.svelte';
	import HomeBlogSection from '$lib/home-blog-section.svelte';
	import HomeContactSection from '$lib/home-contact-section.svelte';
	import HomeFooter from '$lib/home-footer.svelte';
	import HomeLandingSectionContainer from '$lib/home-landing-section-container.svelte';
	import HomeLandingSectionDesktop from '$lib/home-landing-section-desktop.svelte';
	import HomeLandingSectionMobile from '$lib/home-landing-section-mobile.svelte';
	import HomeNavMenuDesktop from '$lib/home-nav-menu-desktop.svelte';
	import HomeNavMenuMobile from '$lib/home-nav-menu-mobile.svelte';
	import HomeWorkSection from '$lib/home-work-section.svelte';

	import store from '../store';

	const { isMobile } = store;

	let innerHeight = 0;
	let innerWidth = 0;
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

<svelte:window bind:innerHeight bind:innerWidth bind:scrollY on:scroll={handleScroll} />
{#if innerWidth < 816}
	<HomeNavMenuMobile />
{:else}
	<HomeNavMenuDesktop />
{/if}
<HomeLandingSectionContainer>
	{#if shouldRenderLandingContent}
		{#if $isMobile}
			<HomeLandingSectionMobile {scrollY} />
		{:else}
			<HomeLandingSectionDesktop {scrollY} />
		{/if}
	{/if}
</HomeLandingSectionContainer>
<div class="raised">
	<HomeWorkSection />
	<HomeBlogSection />
	<HomeAboutSection />
	<HomeContactSection />
	<HomeFooter {handleBackToTop} />
</div>

<style>
	.raised {
		position: relative;
		z-index: 1;
	}
</style>
