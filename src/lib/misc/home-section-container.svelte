<script lang="ts">
	import { onMount, tick } from 'svelte';
	import debounce from 'lodash.debounce';

	import store from '../../store';

	const { isDarkMode } = store;

	export let isAltColor = false;
	export let name = '';
	export let updateOffset = (offset: number): void => undefined;

	let sectionElement: HTMLElement;

	onMount(async () => {
		if (sectionElement.parentElement) {
			await tick();
			updateOffset(sectionElement.parentElement.offsetTop + sectionElement.offsetTop);
		}
	});

	const handleResize = debounce(() => {
		if (sectionElement.parentElement) {
			updateOffset(sectionElement.parentElement.offsetTop + sectionElement.offsetTop);
		}
	}, 300);
</script>

<svelte:window on:resize={handleResize} />
<section bind:this={sectionElement} class:isAltColor class:isDarkMode={$isDarkMode}>
	<div class="contentContainer">
		<div class="headingContainer">
			<div class="stripes" />
			<h2>{name}</h2>
			<div class="absStripesAnchor">
				<div class="absStripes" />
			</div>
		</div>
		<slot />
		<!-- <div class="verticalStripes" /> -->
	</div>
</section>

<style lang="scss">
	section {
		background-color: $light-bg-a;
		border-top: 1px solid $palette-dark;
		min-height: 100vh;
		overflow: hidden;
		padding: 72px 0 96px;
	}

	h2 {
		color: $palette-extra-dark;
		line-height: 22px;
		margin-left: 24px;
		text-shadow: 2px 2px 0 $palette-dark;
	}

	.isAltColor {
		background-color: $light-bg-b;
	}

	.contentContainer {
		margin: 0 auto;
		max-width: 1200px;
		padding: 0 58px;
		position: relative;
		text-align: center;
	}

	.headingContainer {
		align-items: center;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 72px;
	}

	.stripes {
		background-color: $palette-light;
		box-shadow: 3px 3px 0 $palette-medium, 6px 6px 0 $palette-dark;
		height: 3px;
		position: relative;
		right: 6px;
		width: 72px;
	}

	.absStripesAnchor {
		position: relative;
	}

	.absStripes {
		background-color: $palette-light;
		box-shadow: 3px 3px 0 $palette-medium, 6px 6px 0 $palette-dark;
		height: 3px;
		left: 24px;
		position: absolute;
		top: -1px;
		width: 100vw;
	}

	.verticalStripes {
		background-color: $palette-light;
		box-shadow: 3px 3px 0 $palette-medium, 6px 6px 0 $palette-dark;
		height: 72px;
		position: absolute;
		right: -3px;
		top: -21px;
		width: 3px;
	}

	// DARK

	.isDarkMode {
		background-color: $dark-bg-a;
		border-top: 1px solid light;
	}

	.isDarkMode.isAltColor {
		background-color: $dark-bg-b;
	}

	.isDarkMode h2 {
		color: $palette-extra-light;
		text-shadow: 2px 2px 0 $palette-medium;
	}

	@media (min-width: 768px) {
		h2 {
			line-height: 26px;
		}
	}
</style>
