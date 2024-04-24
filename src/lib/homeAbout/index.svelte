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
			I'm a frontend developer with a passion for graphic design and quality UX. I strive to bridge the gap between people and technology by creating intuitive, aesthetic interfaces. I'm well versed in JavaScript and love working with React and Svelte. I'm experienced with Wordpress and PHP as well. I'm always on the lookout for new tech and the problems it can help solve!
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
