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
			<img
				alt="your-mortgage-online"
				class="mobileImg"
				src={ss3MobileImgA}
				style={`border-color: ${$isDarkMode ? '#e68a6e' : '#5d5c7b'};`}
			/>
		{:else}
			<ImgCarousel />
		{/if}
		<p class="hasPaddingBottom">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
		<h3>Loanhenge</h3>
		<img
			alt="loanhenge"
			class="desktopImg"
			src={loanhengeImgA}
			style={`border-color: ${$isDarkMode ? '#e68a6e' : '#5d5c7b'};`}
		/>
		<img
			alt="loanhenge"
			class="mobileImg"
			src={loanhengeImgB}
			style={`border-color: ${$isDarkMode ? '#e68a6e' : '#5d5c7b'};`}
		/>
		<p class="hasPaddingBottom">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
		<h3>Victory Templates</h3>
		<img
			alt="victory"
			class="desktopImg"
			src={victoryImgA}
			style={`border-color: ${$isDarkMode ? '#e68a6e' : '#fffeef'};`}
		/>
		<img
			alt="victory"
			class="mobileImg"
			src={victoryImgB}
			style={`border-color: ${$isDarkMode ? '#e68a6e' : '#fffeef'};`}
		/>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3 {
		font-size: 24px;
		margin-bottom: 24px;
	}

	p {
		margin-top: 24px;
	}

	img {
		display: inline-block;
	}

	.hasPaddingBottom {
		margin-bottom: 96px;
	}

	.desktopImg {
		border-style: solid;
		border-width: 3px;
		display: none;
		width: 900px;
	}

	.mobileImg {
		border-style: solid;
		border-width: 3px;
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
