<script lang="ts">
	import store from '../../store';

	const {
		isDarkMode,
		isLandingAnimationDisabled,
		landingMouseInitialX,
		landingMouseInitialY,
		landingMouseX,
		landingMouseY
	} = store;

	$: offsetX = ($landingMouseInitialX - $landingMouseX) / -120;
	$: offsetY = ($landingMouseInitialY - $landingMouseY) / -160;
</script>

<div
	style={!$isLandingAnimationDisabled ? `transform: translate(${offsetX}px, ${offsetY}px);` : ''}
>
	<h1 class:isAnimationDisabled={$isLandingAnimationDisabled} class:isDarkMode={$isDarkMode}>
		Billy Cole
	</h1>
	<span>UI Dev. UX Thinker.</span>
</div>

<style lang="scss">
	div {
		text-align: center;
	}

	h1 {
		color: $palette-extra-dark;
		font-size: 36px;
		text-shadow: 2px 2px 0 $palette-dark;
		white-space: nowrap;
	}

	span {
		font-size: 18px;
	}

	.isAnimationDisabled {
		transform: translate(0, 0);
		transition: transform 320ms ease-in-out;
	}

	// DARK

	.isDarkMode {
		color: $palette-extra-light;
		text-shadow: 2px 2px 0 $palette-medium;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 48px;
			pointer-events: none;
		}

		span {
			font-size: 22px;
		}
	}
</style>
