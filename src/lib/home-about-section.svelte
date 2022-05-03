<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { aboutOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		aboutOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorB" name="about" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<p>hi</p>
	</div>
</HomeSectionContainer>

<style lang="scss">
	// dark

	.isDarkMode p {
		color: $palette-a;
	}
</style>
