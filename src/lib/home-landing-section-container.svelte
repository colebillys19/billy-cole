<script lang="ts">
	import store from '../store';

	const { isLandingAnimationDisabled, isDarkMode } = store;

	const disableLandingAnimation = () => {
		isLandingAnimationDisabled.set(true);
	};

	const enableLandingAnimation = () => {
		isLandingAnimationDisabled.set(false);
	};
</script>

<section
	class:isDarkMode={$isDarkMode}
	on:click={enableLandingAnimation}
	on:mouseleave={disableLandingAnimation}
>
	<slot />
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		height: 150vh;
		justify-content: center;
		position: relative;
	}
</style>
