<script lang="ts">
	import TextIconLink from '$lib/misc/text-icon-link.svelte';

	import ArrowUpIcon from '../../svgComponents/arrow-up-icon.svelte';
	import store from '../../store';

	const { isDarkMode } = store;

	export let handleBackToTop: () => void;
</script>

<div class:isDarkMode={$isDarkMode}>
	<TextIconLink handleClick={handleBackToTop} isIconRight>
		<ArrowUpIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} slot="icon" />
		<span class="textIconLinkText" slot="text">back to top</span>
	</TextIconLink>
</div>

<style lang="scss">
	div {
		background-color: $light-bg-b;
		padding: 24px 48px;
		text-align: center;
	}

	// DARK

	.isDarkMode {
		background-color: $dark-bg-b;
	}

	@media (min-width: 560px) {
		div {
			text-align: right;
		}
	}
</style>
