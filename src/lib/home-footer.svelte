<script lang="ts">
	import TextIconLink from '$lib/text-icon-link.svelte';

	import store from '../store';
	import ArrowUpIcon from '../svgComponents/arrow-up-icon.svelte';

	const { isDarkMode } = store;

	export let handleBackToTop: () => void;
</script>

<div class:isDarkMode={$isDarkMode}>
	<TextIconLink handleClick={handleBackToTop} isIconRight>
		<ArrowUpIcon slot="icon" />
		<span slot="text">back to top</span>
	</TextIconLink>
</div>

<style lang="scss">
	div {
		text-align: center;
	}

	@media (min-width: 560px) {
		div {
			text-align: right;
		}
	}
</style>
