<script lang="ts">
	import store from '../../store';

	const { isLandingAnimationDisabled, isDarkMode } = store;

	export let offsetX = 0;
	export let offsetY = 0;
</script>

<h1
	class:isAnimationDisabled={$isLandingAnimationDisabled}
	class:isDarkMode={$isDarkMode}
	style={!$isLandingAnimationDisabled ? `transform: translate(${offsetX}px, ${offsetY}px);` : ''}
>
	Billy Cole
</h1>

<style lang="scss">
	h1 {
		color: $palette-extra-dark;
		font-size: 36px;
		text-shadow: 1px 1px 0 #000000;
		white-space: nowrap;
	}

	.isAnimationDisabled {
		transform: translate(0, 0);
		transition: transform 320ms ease-in-out;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 48px;
		}
	}
</style>
