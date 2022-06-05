<script lang="ts">
	import HomeSectionContainer from '$lib/misc/home-section-container.svelte';
	import TextIconLink from '$lib/misc/text-icon-link.svelte';

	import cvPdf from '../../billy-cole-cv.pdf';
	import DownloadIcon from '../../svgComponents/download-icon.svelte';
	import headshotImg from '../../images/headshot.jpg';
	import store from '../../store';

	const { aboutOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		aboutOffset.set(offset);
	};
</script>

<HomeSectionContainer isAltColor name="about" {updateOffset}>
	<div class:isDarkMode={$isDarkMode} class="container">
		<h3>Hi! I'm Billy.</h3>
		<p class="reading">
			As a kid I always gravitated toward creative pursuits - first it was drawing, then
			photography, and then music. In high school I developed a passion for writing and recording
			music. My friends and I always had some sort of garage band going - and I was the defacto
			"producer". This led to me pursuing audio engineering as a career. I attended Full Sail
			University in Florida and earned a Bachelor's degree in Recording Arts. I worked as an
			audio-visual tech and audio engineer for a number of years, playing and recording music on the
			side.
		</p>
		<p class="reading">
			A number of years later a friend introduced me to web development. I fell in love with how web
			development tapped into different parts of my brain and challenged me in all the right ways.
		</p>
		<p class="reading">It played into inherent strengths:</p>
		<ul class="homeList reading">
			<li>a creative eye</li>
			<li>a gift for pattern recognition</li>
			<li>an ability to solve puzzles</li>
			<li>a propensity to keep things orderly and organized</li>
		</ul>
		<p class="reading">and strengths I'd developed as a music and audio guy:</p>
		<ul class="homeList reading">
			<li>a familiarity with computing</li>
			<li>a familiarity with how interfaces should look and feel</li>
			<li>an ability to solve complex problems on the fly</li>
			<li>a desire and ability to seek out original ideas</li>
		</ul>
		<p class="reading">
			What started as an interest turned into a new passion. I spent time learning the craft on my
			own, then took a few classes at a local community college. Eventually I decided to take the
			plunge and pursue a coding career. I moved out to San Francisco and attended Rithm School's
			four month web development bootcamp. Shortly after I landed a job as a software engineer at
			Dovenmuehle, a mortgage-focused finance company based out of Illinois. Since then...
		</p>
		<TextIconLink download="billy-cole-cv" href={cvPdf} isIconRight target="_blank">
			<DownloadIcon color="#383d5d" slot="icon" />
			<span slot="text">download cv</span>
		</TextIconLink>
		<div class="imgDiv" style={`background-image: url(${headshotImg});`} />
	</div>
</HomeSectionContainer>

<style lang="scss">
	.container {
		text-align: left;
	}

	.imgDiv {
		background-size: cover;
		border: 3px solid $palette-light;
		height: 240px;
		margin: 0 auto;
		width: 240px;
	}

	@media (min-width: 1040px) {
		.imgDiv {
			height: 240px;
			width: 240px;
		}
	}
</style>
