<script lang="ts">
	import store from '../../store';

	const {
		isLandingAnimationDisabled,
		isDarkMode,
		isMobile,
		isNavOpen,
		landingMouseInitialX,
		landingMouseInitialY,
		landingMouseX,
		landingMouseY
	} = store;

	$: $isLandingAnimationDisabled, resetMouseValues();

	const disableLandingAnimation = () => {
		isLandingAnimationDisabled.set(true);
	};

	const enableLandingAnimation = () => {
		isLandingAnimationDisabled.set(false);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!$isLandingAnimationDisabled && !$isMobile) {
			if ($landingMouseInitialX === -1) {
				landingMouseInitialX.set(e.clientX);
				landingMouseInitialY.set(e.clientY);
			}
			landingMouseX.set(e.clientX);
			landingMouseY.set(e.clientY);
		}
	};

	const resetMouseValues = () => {
		if ($isLandingAnimationDisabled) {
			landingMouseInitialX.set(-1);
			landingMouseInitialY.set(0);
			landingMouseX.set(0);
			landingMouseY.set(0);
		}
	};
</script>

<section
	class:isDarkMode={$isDarkMode}
	class:isMobile={$isMobile}
	on:click={enableLandingAnimation}
	on:mouseleave={disableLandingAnimation}
	on:mousemove={handleMouseMove}
>
	<slot />
	{#if !$isMobile}
		<div class:isNavOpen={$isNavOpen} />
	{/if}
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		height: 150vh;
		justify-content: center;
		position: relative;
	}

	div {
		border-radius: 50%;
		box-shadow: 1px 1px 0 $palette-dark;
		height: 60px;
		left: 10px;
		position: fixed;
		top: 10px;
		transition: top 320ms ease-in-out;
		width: 60px;
	}

	.isMobile {
		height: 110vh;
	}

	.isNavOpen {
		top: -70px;
	}

	// DARK

	.isDarkMode div {
		box-shadow: 1px 1px 0 $palette-medium;
	}
</style>
