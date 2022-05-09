<script lang="ts">
	import IconButton from '$lib/icon-button.svelte';

	import store from '../store';
	import ArrowUpIcon from '../svgComponents/arrow-up-icon.svelte';
	import HomeSectionContainer from './home-section-container.svelte';

	const { contactOffset, isDarkMode } = store;

	export let handleBackToTop: () => void;

	const updateOffset = (offset: number): void => {
		contactOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorA" name="contact" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<p>yes</p>
		<IconButton handleClick={handleBackToTop}>
			<ArrowUpIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} />
		</IconButton>
	</div>
</HomeSectionContainer>

<style lang="scss">
	// dark

	.isDarkMode p {
		color: $palette-a;
	}
</style>
