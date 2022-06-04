<script lang="ts">
	import AboutSection from '$lib/homeAbout/index.svelte';
	import BlogSection from '$lib/homeBlog/index.svelte';
	import ContactSection from '$lib/homeContact/index.svelte';
	import Footer from '$lib/homeFooter/index.svelte';
	import LandingSectionContainer from '$lib/homeLanding/container.svelte';
	import LandingSection from '$lib/homeLanding/index.svelte';
	import NavMenuDesktop from '$lib/homeNav/index-desktop.svelte';
	import NavMenuMobile from '$lib/homeNav/index-mobile.svelte';
	import WorkSection from '$lib/homeWork/index.svelte';

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
{#if innerWidth < 920}
	<NavMenuMobile />
{:else}
	<NavMenuDesktop />
{/if}
<LandingSectionContainer>
	<LandingSection {scrollY} />
</LandingSectionContainer>
<div class="raised">
	<WorkSection />
	<BlogSection />
	<AboutSection />
	<ContactSection />
	<Footer {handleBackToTop} />
</div>

<style lang="scss">
	.raised {
		position: relative;
		z-index: 1;
	}
</style>
