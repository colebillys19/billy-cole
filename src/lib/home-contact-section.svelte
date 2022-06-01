<script lang="ts">
	import store from '../store';
	import HomeSectionContainer from './home-section-container.svelte';

	const { contactOffset, isDarkMode } = store;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="contact" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<p>placeholder</p>
	</div>
</HomeSectionContainer>

<style lang="scss">
	// dark

	.isDarkMode p {
		color: $palette-a;
	}
</style>
