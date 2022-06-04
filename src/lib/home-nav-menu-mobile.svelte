<script lang="ts">
	import IconButton from '$lib/icon-button.svelte';
	import TextIconLink from '$lib/text-icon-link.svelte';

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

	const handleWindowClick = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		closeOnClickAway(target);
	};

	const handleTouchend = (e: TouchEvent) => {
		const target = e.target as HTMLElement;
		closeOnClickAway(target);
	};
</script>

<svelte:window bind:scrollY on:click={handleWindowClick} on:touchend={handleTouchend} />
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
				<TextIconLink
					handleClick={() => handleScrollClick($workOffset)}
					isNavMargin
					tabindex={$isNavOpen ? 0 : -1}
				>
					<MonitorIcon slot="icon" />
					<span slot="text">work</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($blogOffset)}
					isNavMargin
					tabindex={$isNavOpen ? 0 : -1}
				>
					<BulbIcon slot="icon" />
					<span slot="text">blog</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($aboutOffset)}
					isNavMargin
					tabindex={$isNavOpen ? 0 : -1}
				>
					<UserIcon slot="icon" />
					<span slot="text">about</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($contactOffset)}
					isNavMargin
					tabindex={$isNavOpen ? 0 : -1}
				>
					<MailIcon slot="icon" />
					<span slot="text">contact</span>
				</TextIconLink>
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

<style lang="scss">
	nav {
		border-bottom: 6px solid blue;
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
		align-items: center;
		display: flex;
		margin-bottom: 30px;
	}

	.isNavOpen nav {
		top: 0;
	}
</style>
