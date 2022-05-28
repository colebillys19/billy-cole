<script lang="ts">
	import IconButton from '$lib/icon-button.svelte';

	import store from '../store';
	import BulbIcon from '../svgComponents/bulb-icon.svelte';
	import CloseIcon from '../svgComponents/close-icon.svelte';
	import HamburgerIcon from '../svgComponents/hamburger-icon.svelte';
	import MailIcon from '../svgComponents/mail-icon.svelte';
	import MonitorIcon from '../svgComponents/monitor-icon.svelte';
	import MoonIcon from '../svgComponents/moon-icon.svelte';
	import SunIcon from '../svgComponents/sun-icon.svelte';
	import UserIcon from '../svgComponents/user-icon.svelte';

	const { aboutOffset, blogOffset, contactOffset, isDarkMode, isNavOpen, workOffset } = store;

	let scrollY = 0;

	const handleOpenMenu = () => {
		isNavOpen.set(true);
	};

	const handleCloseMenu = () => {
		isNavOpen.set(false);
	};

	const handleScrollClick = (offset: number) => {
		scrollY = offset;
	};

	const toggleDarkMode = () => {
		isDarkMode.update((userPrefersDarkModeState) => {
			const newValue = !userPrefersDarkModeState;
			localStorage.setItem('isDarkMode', newValue.toString());
			return newValue;
		});
	};

	const closeOnClickAway = (target: HTMLElement) => {
		let shouldCloseNav = true;
		target.classList.forEach((v) => {
			if (v === 'navElement') {
				shouldCloseNav = false;
			}
		});
		if (shouldCloseNav) {
			isNavOpen.set(false);
		}
	};

	const handleMousedown = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		closeOnClickAway(target);
	};

	const handleTouchstart = (e: TouchEvent) => {
		const target = e.target as HTMLElement;
		closeOnClickAway(target);
	};
</script>

<svelte:window bind:scrollY on:click={handleMousedown} on:touchstart={handleTouchstart} />
<div class:isDarkMode={$isDarkMode} class:isNavOpen={$isNavOpen}>
	<IconButton
		ariaLabel="open nav menu"
		class="openButton navElement"
		handleClick={handleOpenMenu}
		hideHamburger={$isNavOpen}
		tabIndex={$isNavOpen ? -1 : 0}
	>
		<HamburgerIcon />
	</IconButton>
	<nav class="navElement">
		<IconButton
			ariaLabel="close nav menu"
			class="closeButton"
			handleClick={handleCloseMenu}
			tabIndex={$isNavOpen ? 0 : -1}
		>
			<CloseIcon />
		</IconButton>
		<ul class="navElement">
			<li>
				<button on:click={() => handleScrollClick($workOffset)} tabindex={$isNavOpen ? 0 : -1}>
					<MonitorIcon />
					<span>work</span>
				</button>
			</li>
			<li>
				<button on:click={() => handleScrollClick($blogOffset)} tabindex={$isNavOpen ? 0 : -1}>
					<BulbIcon />
					<span>blog</span>
				</button>
			</li>
			<li>
				<button on:click={() => handleScrollClick($aboutOffset)} tabindex={$isNavOpen ? 0 : -1}>
					<UserIcon />
					<span>about</span>
				</button>
			</li>
			<li>
				<button on:click={() => handleScrollClick($contactOffset)} tabindex={$isNavOpen ? 0 : -1}>
					<MailIcon />
					<span>contact</span>
				</button>
			</li>
		</ul>
		<IconButton
			ariaLabel="toggle dark mode"
			class="navElement"
			handleClick={toggleDarkMode}
			tabIndex={$isNavOpen ? 0 : -1}
		>
			{#if $isDarkMode}
				<SunIcon />
			{:else}
				<MoonIcon color="#fffeef" />
			{/if}
		</IconButton>
	</nav>
</div>

<!-- <style lang="scss">
	nav {
		background-color: rgba(56, 61, 93, 0.9);
		border-bottom-color: $palette-c;
		border-bottom-style: solid;
		border-bottom-width: 6px;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		position: fixed;
		top: -304px;
		transition: top 320ms ease-in-out;
		width: 100%;
		z-index: 2;
	}

	ul {
		list-style: none;
		margin: 30px 0 0 0;
		padding: 0;
		text-align: center;
	}

	li {
		margin-bottom: 30px;
	}

	li button {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		display: flex;
	}

	li button span {
		color: $palette-a;
		font-size: 18px;
		margin-left: 12px;
	}

	button:hover {
		cursor: pointer;
	}

	// dark

	.isDarkMode {
		background-color: $palette-g;
	}

	// nav open

	.isNavOpen nav {
		top: 0;
	}

	@media (min-width: 816px) {
		nav {
			border-bottom-width: 4px;
			top: -84px;
		}

		ul {
			align-items: center;
			display: flex;
			margin: 0;
		}

		li {
			margin: 0;
		}

		li:not(:last-of-type) {
			margin: 0 60px 0 0;
		}
	}
</style> -->
<style lang="scss">
	nav {
		background-color: rgba(56, 61, 93, 0.9);
		border-bottom-color: $palette-c;
		border-bottom-style: solid;
		border-bottom-width: 4px;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		position: fixed;
		top: -84px;
		transition: top 320ms ease-in-out;
		width: 100%;
		z-index: 2;
	}

	ul {
		align-items: center;
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	li:not(:last-of-type) {
		margin: 0 60px 0 0;
	}

	li button {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		display: flex;
	}

	li button span {
		color: $palette-a;
		font-size: 18px;
		margin-left: 12px;
	}

	button:hover {
		cursor: pointer;
	}

	.isNavOpen nav {
		top: 0;
	}

	// dark

	.isDarkMode {
		background-color: $palette-g;
	}
</style>
