<script lang="ts">
	import HomeSectionContainer from '$lib/misc/home-section-container.svelte';
	import TextIconLink from '$lib/misc/text-icon-link.svelte';

	import cvPdf from '../../billy-cole-cv.pdf';
	import DownloadIcon from '../../svgComponents/download-icon.svelte';
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
			As a kid I always gravitated toward creative pursuits - first it was drawing and photography,
			then in high school I developed a love for writing and recording music. My friends and I
			always had some sort of garage band going - and I was the defacto "producer". This led to me
			pursuing audio engineering as a career. I attended Full Sail University in Florida and earned
			a Bachelor's degree in Recording Arts. I worked as an audio-visual tech and audio engineer for
			a number of years, playing and recording music on the side.
		</p>
		<p class="reading">
			Then one fateful day a friend introduced me to coding! More specifically, web development. I
			was drawn to how it tapped into different parts of my brain and challenged me in all the right
			ways.
		</p>
		<p class="reading">It played into inherent strengths:</p>
		<ul class="homeList reading">
			<li>a creative eye</li>
			<li>a gift for pattern recognition</li>
			<li>a propensity to keep things organized and orderly</li>
			<li>a knack for solving puzzles</li>
		</ul>
		<p class="reading">and strengths I'd developed as a music/audio guy:</p>
		<ul class="homeList reading">
			<li>a familiarity with computing</li>
			<li>a familiarity with how interfaces should look and feel</li>
			<li>an ability to solve complex problems on the fly</li>
			<li>a desire and ability to seek out original ideas</li>
		</ul>
		<p class="reading">
			What started as an interest turned into a real passion. I spent time learning the craft on my
			own then took a few classes at a local community college. Eventually I decided to take the
			plunge and pursue a coding career. I moved out to San Francisco and attended Rithm School's
			four month web development bootcamp. Shortly after I landed a job as a software engineer at
			Dovenmuehle, a mortgage-focused finance company based out of Illinois. After a few years
			cutting my teeth in the field I've decided to look for new opportunities!
		</p>
		<TextIconLink download="billy-cole-cv" href={cvPdf} isIconRight target="_blank">
			<DownloadIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
			<span class="textIconLinkText" slot="text">download cv</span>
		</TextIconLink>
		<div
			class="imgDiv"
			style="background-image: url(https://res.cloudinary.com/dxklaorw6/image/upload/v1655908702/billycole.dev/headshot-b.jpg);"
		/>
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3,
	p,
	ul {
		margin-bottom: 24px;
	}

	.container {
		text-align: left;
	}

	.imgDiv {
		background-size: cover;
		border: 3px solid $palette-light;
		height: 240px;
		margin: 48px auto 0;
		width: 240px;
	}

	// DARK

	.isDarkMode li {
		color: $palette-extra-light;
	}
</style>
