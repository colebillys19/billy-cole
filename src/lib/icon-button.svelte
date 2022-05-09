<script lang="ts">
	export let ariaLabel = '';
	export let handleClick: () => void;
	export let hideHamburger = false;
	export let tabIndex = 0;
</script>

<button
	class:hideHamburger
	on:click={handleClick}
	aria-label={ariaLabel}
	class={$$props.class}
	tabindex={tabIndex}
>
	<slot />
</button>

<style>
	button {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border-radius: 50%;
		border: none;
		display: flex;
		height: 60px;
		justify-content: center;
		padding: 0;
		width: 60px;
	}

	button:hover {
		cursor: pointer;
	}

	.openButton {
		left: 10px;
		position: fixed;
		top: 10px;
		transition: top 320ms ease-in-out;
		z-index: 2;
	}

	.hideHamburger {
		top: -70px;
	}
</style>
