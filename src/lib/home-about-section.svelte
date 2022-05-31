<script lang="ts">
	import store from '../store';
	import headshotImg from '../images/headshot.jpg';
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Aliquam
			vestibulum morbi blandit cursus risus at ultrices mi tempus. Gravida quis blandit turpis
			cursus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Habitant
			morbi tristique senectus et netus et malesuada fames.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Aliquam
			vestibulum morbi blandit cursus risus at ultrices mi tempus. Gravida quis blandit turpis
			cursus. Quis risus sed vulputate odio ut enim. Et malesuada fames ac turpis egestas maecenas
			pharetra convallis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.
			Mauris vitae ultricies leo integer malesuada. Interdum velit laoreet id donec ultrices
			tincidunt. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
			Habitant morbi tristique senectus et netus et malesuada fames. Vitae auctor eu augue ut lectus
			arcu bibendum at varius. Eu feugiat pretium nibh ipsum consequat. Eu ultrices vitae auctor eu.
			Egestas dui id ornare arcu odio ut. Sapien nec sagittis aliquam malesuada bibendum arcu vitae
			elementum curabitur.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Duis ut diam quam nulla porttitor massa id neque. Aliquam
			vestibulum morbi blandit cursus risus at ultrices mi tempus. Gravida quis blandit turpis
			cursus. Quis risus sed vulputate odio ut enim. Et malesuada fames ac turpis egestas maecenas
			pharetra convallis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.
			Mauris vitae ultricies leo integer malesuada. Interdum velit laoreet id donec ultrices
			tincidunt. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
			Habitant morbi tristique senectus et netus et malesuada fames.
		</p>
		<div class="imgDiv" style={`background-image: url(${headshotImg});`} />
	</div>
</HomeSectionContainer>

<style lang="scss">
	h3 {
		font-size: 24px;
		margin-bottom: 24px;
	}

	p {
		margin-bottom: 24px;
	}

	p:last-of-type {
		margin-bottom: 48px;
	}

	.container {
		text-align: left;
	}

	.imgDiv {
		background-size: cover;
		height: 240px;
		margin: 0 auto;
		width: 240px;
		border: 3px solid $palette-a;
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
