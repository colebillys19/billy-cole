<script lang="ts">
	import ImgCarousel from '$lib/home-img-carousel.svelte';

	import store from '../store';
	import loanhengeImgA from '../images/loanhenge-a.jpg';
	import loanhengeImgB from '../images/loanhenge-b.jpg';
	import ss3MobileImgA from '../images/ss3-mobile-a.jpg';
	import victoryImgA from '../images/victory-a.jpg';
	import victoryImgB from '../images/victory-b.jpg';
	import HomeSectionContainer from './home-section-container.svelte';

	const { isDarkMode, workOffset } = store;

	let innerWidth = 0;

	console.log(innerWidth);

	const updateOffset = (offset: number): void => {
		workOffset.set(offset);
	};
</script>

<svelte:window bind:innerWidth />
<HomeSectionContainer className="bgColorB" name="work" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<h3>Your Mortgage Online</h3>
		{#if innerWidth < 560}
			<img class="mobileImg" src={ss3MobileImgA} alt="your-mortgage-online" />
		{:else}
			<ImgCarousel />
		{/if}
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
		<h3>Loanhenge</h3>
		<img class="desktopImg" src={loanhengeImgA} alt="loanhenge" />
		<img class="mobileImg" src={loanhengeImgB} alt="loanhenge" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
		<h3>Victory Templates</h3>
		<img class="desktopImg" src={victoryImgA} alt="victory" />
		<img class="mobileImg" src={victoryImgB} alt="victory" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
	</div>
</HomeSectionContainer>

<style lang="scss">
	img {
		display: inline-block;
	}

	.desktopImg {
		display: none;
		width: 900px;
	}

	.mobileImg {
		width: 252px;
	}

	// dark

	.isDarkMode p,
	.isDarkMode h3 {
		color: $palette-a;
	}

	@media (min-width: 560px) {
		.mobileImg {
			width: 480px;
		}

		.ss3MobileImg {
			width: 240px;
		}
	}

	@media (min-width: 768px) {
		.desktopImg {
			display: inline-block;
		}

		.mobileImg {
			display: none;
		}
	}
</style>
