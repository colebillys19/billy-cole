<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { isDarkMode, workOffset } = store;

	const updateOffset = (offset: number): void => {
		workOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorB" name="work" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<p>your mortgage online</p>
		<p>loan vista</p>
		<p>chart templates</p>
	</div>
</HomeSectionContainer>

<style lang="scss">
	// dark

	.isDarkMode p {
		color: $palette-a;
	}
</style>
