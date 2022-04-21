<script lang="ts">
	import HomeAboutSection from '$lib/home-about-section.svelte';
	import HomeBlogSection from '$lib/home-blog-section.svelte';
	import HomeContactSection from '$lib/home-contact-section.svelte';
	import HomeLandingSection from '$lib/home-landing-section.svelte';
	import HomeWorkSection from '$lib/home-work-section.svelte';
</script>

<HomeLandingSection />
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
