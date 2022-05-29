<script lang="ts">
	import ImgCarousel from '$lib/home-img-carousel.svelte';

	import store from '../store';
	import loanhengeImgA from '../images/loanhenge-a.jpg';
	import loanhengeImgB from '../images/loanhenge-b.jpg';
	import ss3MobileImgA from '../images/ss3-mobile-a.jpg';
	import victoryImgA from '../images/victory-a.jpg';
	import victoryImgB from '../images/victory-b.jpg';
	import HomeSectionContainer from './home-section-container.svelte';

	const { isDarkMode, isMobile, workOffset } = store;

	let innerWidth = 0;

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
		<p>
			Your Mortgage Online is a widely used iOS/Android application that gives homeowners the
			ability to easily manage their mortgages. Users can make payments <b>|</b> they can manage
			escrow accounts, taxes, and insurance <b>|</b> they can contact customer support <b>|</b> and more.
			I was an integral part of the team that built the app from the ground up.
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class="hasPaddingBottom tools">
			<li>React Native</li>
			<li>Redux</li>
			<li>Redux Saga, Immer, Reselect</li>
			<li>Node</li>
			<li>Koa</li>
			<li>Styled Components</li>
		</ul>
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
		<p>
			Loanhenge is a project I started as a sort of sandbox to experiment with front-end concepts
			and best-practices while cutting my teeth as a developer. Not long after getting my first job
			after bootcamp, I was put on a small team tasked with building a React application that'd be
			used by banks to keep track of bulk loan data. While building that application there were
			scenarios where I wanted to spend more time fleshing out features and experimenting. I decided
			to start a project I could work on in my free time that would allow for more freedom. That
			project became Loanhenge! <span class="opaque">(desktop only)</span>
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class:hasPaddingBottom={$isMobile} class="tools">
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
			<p class="hasPaddingBottom">
				<a class="bigLink" href="https://loanhenge.herokuapp.com/" target="_blank"
					>Visit &#x1F440; &#x1F440; &#x1F440;</a
				>
			</p>
		{/if}
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
			Victory Templates is a project I created as a resource for the devs on my team <span
				class="opaque">(and for myself!)</span
			>. We were tasked with recreating a legacy application that implemented various interactive
			charts. We decided to make use of Formidable's React chart component library
			<a href="https://formidable.com/open-source/victory/">Victory</a>. I was asked to research the
			library and put together a repo we could reference as we built out the app. That ask became
			Victory Templates.
			<span class="opaque">(desktop only)</span>
		</p>
		<p class="tools"><b>Tools used:</b></p>
		<ul class:hasPaddingBottom={$isMobile} class="tools">
			<li>React</li>
			<li>Victory</li>
			<li>Material UI</li>
			<li>Styled Components</li>
		</ul>
		{#if !$isMobile}
			<p class="hasPaddingBottom">
				<a class="bigLink" href="https://loanhenge.herokuapp.com/" target="_blank"
					>Visit &#x1F440; &#x1F440; &#x1F440;</a
				>
			</p>
		{/if}
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
	h3 {
		font-size: 24px;
		margin-bottom: 24px;
	}

	p {
		margin-top: 24px;
		text-align: left;
	}

	img {
		display: inline-block;
	}

	ul {
		margin: 0;
		text-align: left;
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

	.tools {
		color: $palette-f;
	}

	.opaque {
		opacity: 0.6;
	}

	.bigLink {
		font-size: 20px;
		font-weight: 700;
		text-decoration: none;
	}

	// dark

	.isDarkMode p,
	.isDarkMode h3 {
		color: $palette-a;
	}

	.isDarkMode a,
	.isDarkMode .tools {
		color: $palette-b;
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
