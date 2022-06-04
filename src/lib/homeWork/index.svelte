<script lang="ts">
	// import ImgCarousel from '$lib/home-img-carousel.svelte';

	// import { getCarouselProps, hasKey } from '../helpers';
	import { hasKey } from '../../helpers';
	import HomeSectionContainer from '../misc/home-section-container.svelte';
	import loanhengeImgDesktop from '../../images/loanhenge-a.jpg';
	import loanhengeImgMobile from '../../images/loanhenge-b.jpg';
	import ss3MobileImgA from '../../images/ss3-mobile-a.jpg';
	import store from '../../store';
	import victoryImgDesktop from '../../images/victory-a.jpg';
	import victoryImgMobile from '../../images/victory-b.jpg';

	const { isDarkMode, isMobile, workOffset } = store;

	let innerWidth = 0;

	const SRC_DICT = {
		loanhengeL: loanhengeImgDesktop,
		loanhengeS: loanhengeImgMobile,
		ss3: ss3MobileImgA,
		victoryL: victoryImgDesktop,
		victoryS: victoryImgMobile
	};

	const updateOffset = (offset: number): void => {
		workOffset.set(offset);
	};

	$: getImageSrcStyle = (imgId: string) => {
		let keyName = imgId;
		if (imgId !== 'ss3') {
			keyName = innerWidth < 1040 ? `${imgId}S` : `${imgId}L`;
		}
		if (hasKey(SRC_DICT, keyName)) {
			const src = SRC_DICT[keyName];
			return `background-image: url(${src});`;
		}
	};
</script>

<svelte:window bind:innerWidth />
<HomeSectionContainer isAltColor name="work" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<h3>Your Mortgage Online</h3>
		<!-- {#if innerWidth <= 560}
			<div class="imgDiv ss3ImgDiv" style={getImageSrcStyle('ss3')} />
		{:else}
			<ImgCarousel
				offsets={getCarouselProps(innerWidth).offsets}
				width={getCarouselProps(innerWidth).width}
			/>
		{/if} -->
		<div class="imgDiv ss3ImgDiv" style={getImageSrcStyle('ss3')} />
		<p class="reading">
			Your Mortgage Online is a widely used iOS/Android application that gives homeowners the
			ability to easily manage their mortgages. Users can make payments <span class="lighten"
				>-</span
			>
			they can manage escrow accounts, taxes, and insurance <span class="lighten">-</span> they can
			contact customer support <span class="lighten">-</span> and much more. I was an integral part of
			the team that built the app from the ground up.
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="tools">
			<li>React Native</li>
			<li>Redux</li>
			<li>Redux Saga, Immer, Reselect</li>
			<li>Node</li>
			<li>Koa</li>
			<li>Styled Components</li>
		</ul>
		<div class="divider" />
		<h3>Loanhenge</h3>
		<div class="imgDiv loanhengeImgDiv" style={getImageSrcStyle('loanhenge')} />
		<p class="reading">
			Loanhenge is a project I started as a sort of sandbox to experiment with front-end concepts
			and best-practices while cutting my teeth as a developer. Not long after getting my first job
			after bootcamp, I was put on a small team tasked with building a React application that'd be
			used by banks to keep track of bulk loan data. While building that application there were
			scenarios where I wanted to spend more time fleshing out features and experimenting. I decided
			to start a project I could work on in my free time that would allow for more freedom. That
			project became Loanhenge! <span class="lighten">(desktop only)</span>
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="tools">
			<li>React</li>
			<li>Redux</li>
			<li>Redux Saga, Immer, Reselect</li>
			<li>Node</li>
			<li>Express</li>
			<li>Material UI</li>
			<li>Styled Components</li>
			<li>React Testing Library</li>
		</ul>
		{#if !$isMobile}
			<p>
				<a class="bigLink" href="https://loanhenge.herokuapp.com/" target="_blank"
					>Visit &#x1F440; &#x1F440; &#x1F440;</a
				>
			</p>
		{/if}
		<div class="divider" />
		<h3>Victory Templates</h3>
		<div class="imgDiv victoryImgDiv" style={getImageSrcStyle('victory')} />
		<p class="reading">
			Victory Templates is a project I created as a resource for the devs on my team <span
				class="lighten">(and for myself!)</span
			>. We were tasked with recreating a legacy application that implemented various interactive
			charts. We decided to make use of Formidable's React chart component library
			<a href="https://formidable.com/open-source/victory/">Victory</a>. I was asked to research the
			library and put together a repo we could reference as we built out the app. That ask became
			Victory Templates. <span class="lighten">(desktop only)</span>
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="tools">
			<li>React</li>
			<li>Victory</li>
			<li>Material UI</li>
			<li>Styled Components</li>
		</ul>
		{#if !$isMobile}
			<p>
				<a class="bigLink" href="https://loanhenge.herokuapp.com/" target="_blank"
					>Visit &#x1F440; &#x1F440; &#x1F440;</a
				>
			</p>
		{/if}
		<div class="divider" />
		<h3>This Site!</h3>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="tools">
			<li>Svelte</li>
			<li>TypeScript</li>
			<li>more...</li>
		</ul>
	</div>
</HomeSectionContainer>

<style lang="scss">
	p {
		text-align: left;
	}

	ul {
		padding: 0 40px;
	}

	li::marker {
		color: $palette-medium;
	}

	.imgDiv {
		background-size: cover;
	}

	.ss3ImgDiv {
		border: 3px solid $palette-extra-dark;
		height: 448px;
		width: 252px;
	}

	.loanhengeImgDiv {
		border: 3px solid $palette-extra-dark;
		height: 352px;
		width: 252px;
	}

	.victoryImgDiv {
		border: 3px solid $palette-light;
		height: 270px;
		width: 252px;
	}

	.container {
		text-align: center;
	}

	.imgDiv {
		display: inline-block;
	}

	.tools {
		color: $palette-extra-dark;
	}

	.lighten {
		color: $palette-dark;
	}

	.divider {
		border-bottom: 3px solid $palette-extra-dark;
	}

	@media (min-width: 560px) {
		.loanhengeImgDiv {
			height: 671px;
			width: 480px;
		}

		.victoryImgDiv {
			height: 514px;
			width: 480px;
		}
	}

	@media (min-width: 1040px) {
		.container {
			text-align: left;
		}

		.loanhengeImgDiv {
			height: 464px;
			width: 900px;
		}

		.victoryImgDiv {
			height: 459px;
			width: 900px;
		}
	}
</style>
