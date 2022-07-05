<script lang="ts">
	import ImgCarousel from '$lib/misc/img-carousel.svelte';

	import { hasKey } from '../../helpers';
	import store from '../../store';

	import HomeSectionContainer from '../misc/home-section-container.svelte';

	const { blogOffset, isDarkMode, isMobile, isNavOpen, workOffset } = store;

	export let scrollY = 0;

	let innerWidth = 0;

	$: showBurgerBackground = scrollY > $workOffset && scrollY < $blogOffset - 100;

	const SRC_DICT = {
		loanhengeL:
			'https://res.cloudinary.com/dxklaorw6/image/upload/v1655908709/billycole.dev/loanhenge-a.jpg',
		loanhengeS:
			'https://res.cloudinary.com/dxklaorw6/image/upload/v1655908708/billycole.dev/loanhenge-b.jpg',
		ss3: 'https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-a.jpg',
		victoryL:
			'https://res.cloudinary.com/dxklaorw6/image/upload/v1655908714/billycole.dev/victory-a.jpg',
		victoryS:
			'https://res.cloudinary.com/dxklaorw6/image/upload/v1655908714/billycole.dev/victory-b.jpg'
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
		{#if showBurgerBackground}
			<div class:burgerBackgroundHidden={$isNavOpen} class="burgerBackground" />
		{/if}
		<h3>Your Mortgage Online</h3>
		{#if innerWidth <= 560}
			<div class="imgDiv ss3ImgDiv" style={getImageSrcStyle('ss3')} />
		{:else if innerWidth <= 900}
			<ImgCarousel numToShow={1} />
		{:else if innerWidth <= 1200}
			<ImgCarousel numToShow={2} />
		{:else}
			<ImgCarousel numToShow={3} />
		{/if}
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
		<ul class="homeList tools">
			<li>React Native</li>
			<li>Redux</li>
			<li>Redux Saga, Immer, Reselect</li>
			<li>Node</li>
			<li>Koa</li>
			<li>Styled Components</li>
		</ul>
		<div class="dividerAnchor">
			<div class="divider" />
		</div>
		<h3>Loanhenge</h3>
		<div class="imgDiv loanhengeImgDiv" style={getImageSrcStyle('loanhenge')} />
		<p class="reading">
			Loanhenge is a project I started as a sort of sandbox to experiment with frontend concepts and
			best practices while cutting my teeth as a developer. Not long after getting my first job I
			was put on a small team tasked with building a React application that'd be used by banks to
			keep track of bulk loan data. While building that application there were scenarios where I
			wanted to spend more time fleshing out features and experimenting. I decided to start a
			project I could work on in my free time that would allow for more freedom. <span
				class="lighten">(desktop only)</span
			>
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="homeList tools">
			<li>React</li>
			<li>Redux</li>
			<li>Redux Saga, Immer, Reselect</li>
			<li>Node</li>
			<li>Express</li>
			<li>Material UI</li>
			<li>Styled Components</li>
			<li>React Testing Library</li>
		</ul>
		<!-- {#if !$isMobile}
			<a
				aria-label="visit loanhenge"
				class="bigLink"
				href="https://loanhenge.herokuapp.com/"
				target="_blank">Visit &#x1F440;</a
			>
		{/if} -->
		<div class="dividerAnchor">
			<div class="divider" />
		</div>
		<h3>Victory Templates</h3>
		<div class="imgDiv victoryImgDiv" style={getImageSrcStyle('victory')} />
		<p class="reading">
			Victory Templates is a project I created as a resource for the devs on my team <span
				class="lighten">(and for myself!)</span
			>. We needed to recreate a legacy application that implemented various interactive charts. We
			decided to make use of Formidable's React chart component library
			<a href="https://formidable.com/open-source/victory/" target="_blank">Victory</a>. I was asked
			to research the library and put together a repo we could reference as we built out the app.
			<span class="lighten">(desktop only)</span>
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="homeList tools">
			<li>React</li>
			<li>Victory</li>
			<li>Material UI</li>
			<li>Styled Components</li>
		</ul>
		{#if !$isMobile}
			<a
				aria-label="visit victory charts"
				class="bigLink"
				href="https://victorycharts.herokuapp.com/"
				target="_blank">Visit &#x1F440;</a
			>
		{/if}
		<div class="dividerAnchor">
			<div class="divider" />
		</div>
		<h3>This Site!</h3>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="homeList tools">
			<li>Svelte</li>
			<li>SvelteKit</li>
			<li>TypeScript</li>
			<!-- <li>SendGrid</li> -->
		</ul>
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3 {
		margin-bottom: 24px;
		text-align: center;
	}

	p {
		margin-bottom: 24px;
		text-align: left;
	}

	.imgDiv {
		background-size: cover;
		margin: 0 auto 24px;
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
		height: 268px;
		width: 252px;
	}

	.container {
		text-align: center;
	}

	.burgerBackground {
		background-color: $light-bg-b;
		border-radius: 6px;
		height: 40px;
		left: 22px;
		position: fixed;
		top: 20px;
		transition: top 320ms ease-in-out;
		width: 36px;
		z-index: 1;
	}

	.burgerBackgroundHidden {
		top: -70px;
	}

	.tools {
		color: $palette-extra-dark;
	}

	.homeList {
		text-align: left;
	}

	.bigLink {
		margin-top: 24px;
		display: block;
	}

	.dividerAnchor {
		position: relative;
		height: 191px;
	}

	.divider {
		background-color: $light-bg-a;
		height: 1px;
		position: absolute;
		right: 0;
		top: 96px;
		width: 100vw;
	}

	.lighten {
		color: $palette-dark;
	}

	// DARK

	.isDarkMode .lighten {
		color: $palette-medium;
	}

	.isDarkMode li,
	.isDarkMode .tools b {
		color: $light-bg-b;
	}

	.isDarkMode .ss3ImgDiv,
	.isDarkMode .loanhengeImgDiv {
		border: 3px solid $palette-light;
	}

	.isDarkMode .burgerBackground {
		background-color: $dark-bg-b;
	}

	.isDarkMode .divider {
		background-color: $dark-bg-a;
	}

	@media (min-width: 560px) {
		.loanhengeImgDiv {
			height: 671px;
			width: 480px;
		}

		.victoryImgDiv {
			height: 510px;
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
			height: 478px;
			width: 900px;
		}
	}

	@media (min-width: 1200px) {
		h3 {
			text-align: left;
		}

		.imgDiv {
			margin: 0 0 24px;
		}

		.burgerBackground {
			border-radius: 50%;
			height: 60px;
			left: 10px;
			top: 10px;
			width: 60px;
		}
	}
</style>
