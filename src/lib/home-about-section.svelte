<script lang="ts">
	import TextIconLink from '$lib/text-icon-link.svelte';

	import cvPdf from '../billy-cole-cv.pdf';
	import headshotImg from '../images/headshot.jpg';
	import store from '../store';
	import DownloadIcon from '../svgComponents/download-icon.svelte';
	import HomeSectionContainer from './home-section-container.svelte';

	const { aboutOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		aboutOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorB" name="about" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<h3>Hi! I'm Billy.</h3>
		<p>
			Growing up, I always gravitated toward creative pursuits - when I was young it started with
			drawing, then later it was photography, and then eventually music. In high school I developed
			a love for writing and recording music. My friends and I always had some sort of garage band
			going, and I was the defacto recording engineer. This led to me pursuing audio engineering as
			a career. I attended Full Sail University in Florida and earned a Bachelor's degree in
			Recording Arts. I worked as an audio-visual tech and audio engineer for a number of years,
			playing and recording my own music on the side.
		</p>
		<p>
			Then one fateful day a friend introduced me to web development. I was pleased with how web
			development tapped into different parts of my brain and played into my strengths.
		</p>
		<p>It played into natural strengths:</p>
		<ul>
			<li>my creative eye</li>
			<li>my gift for pattern recognition</li>
			<li>my ability to solve puzzles (especially visual ones)</li>
			<li>my propensity to keep things orderly/organized</li>
		</ul>
		<p>It played into learned strengths:</p>
		<ul>
			<li>a familiarity with computing (and googling!) I'd developed as a recording engineer</li>
			<li>
				a familiarity with how interfaces should look and feel I'd developed working with audio,
				video, and lighting equipment
			</li>
			<li>an ability to solve complex problems on the fly I'd developed working live events</li>
			<li>a desire and ability to seek out original ideas I'd developed as a songwriter</li>
		</ul>
		<p>
			What started as an interest turned into a passion. I spent time learning the craft on my own,
			then took a few classes at a local community college. Eventually I decided to take the plunge
			and pursue a coding career - I flew out to San Francisco and attended Rith School's four month
			web development bootcamp. Shortly after Rithm I landed a job as a software engineer at
			Dovenmuehle's SF office. Dovenmuehle is a mortgage-focused finance company based out of
			Illinois. After a few years working as a full stack dev and learning a ton, I decided to
			explore what else the vast field of web development had to offer.
		</p>
		<TextIconLink download="billy-cole-cv" href={cvPdf} isIconRight target="_blank">
			<DownloadIcon color="#bb77a2" slot="icon" />
			<span slot="text">download cv</span>
		</TextIconLink>
		<div class="imgDiv" style={`background-image: url(${headshotImg});`} />
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3 {
		font-size: 24px;
		margin-bottom: 24px;
	}

	p {
		font-family: 'Roboto', sans-serif;
		font-size: 18px;
		margin-bottom: 24px;
	}

	ul {
		margin: 0 0 24px 0;
		padding: 0 48px;
	}

	li {
		font-size: 18px;
		font-family: 'Roboto', sans-serif;
	}

	.container {
		text-align: left;
	}

	.imgDiv {
		background-size: cover;
		border: 3px solid $palette-a;
		height: 240px;
		margin: 24px auto 0;
		width: 240px;
	}

	// dark

	.isDarkMode h3 {
		color: $palette-c;
	}

	.isDarkMode p {
		color: $palette-a;
	}

	.isDarkMode .imgDiv {
		border: 3px solid $palette-c;
	}

	@media (min-width: 560px) {
	}

	@media (min-width: 1040px) {
		.imgDiv {
			height: 240px;
			width: 240px;
		}
	}
</style>
