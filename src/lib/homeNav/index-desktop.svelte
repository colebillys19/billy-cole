<script lang="ts">
	import IconButton from '$lib/misc/icon-button.svelte';
	import TextIconLink from '$lib/misc/text-icon-link.svelte';

	import BulbIcon from '../../svgComponents/bulb-icon.svelte';
	import CloseIcon from '../../svgComponents/close-icon.svelte';
	import HamburgerIcon from '../../svgComponents/hamburger-icon.svelte';
	import MailIcon from '../../svgComponents/mail-icon.svelte';
	import MonitorIcon from '../../svgComponents/monitor-icon.svelte';
	import MoonIcon from '../../svgComponents/moon-icon.svelte';
	import store from '../../store';
	import SunIcon from '../../svgComponents/sun-icon.svelte';
	import UserIcon from '../../svgComponents/user-icon.svelte';

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
		<HamburgerIcon color="#383d5d" />
	</IconButton>
	<nav class="navElement">
		<IconButton
			ariaLabel="close nav menu"
			class="closeButton"
			handleClick={handleCloseMenu}
			tabIndex={$isNavOpen ? 0 : -1}
		>
			<CloseIcon color="#fffeef" />
		</IconButton>
		<ul class="navElement">
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($workOffset)}
					isNav
					tabindex={$isNavOpen ? 0 : -1}
				>
					<MonitorIcon color="#e68a6e" slot="icon" />
					<span slot="text">work</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($blogOffset)}
					isNav
					tabindex={$isNavOpen ? 0 : -1}
				>
					<BulbIcon color="#e68a6e" slot="icon" />
					<span slot="text">blog</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($aboutOffset)}
					isNav
					tabindex={$isNavOpen ? 0 : -1}
				>
					<UserIcon color="#e68a6e" slot="icon" />
					<span slot="text">about</span>
				</TextIconLink>
			</li>
			<li>
				<TextIconLink
					handleClick={() => handleScrollClick($contactOffset)}
					isNav
					tabindex={$isNavOpen ? 0 : -1}
				>
					<MailIcon color="#e68a6e" slot="icon" />
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
				<SunIcon color="#fffeef" />
			{:else}
				<MoonIcon color="#fffeef" />
			{/if}
		</IconButton>
	</nav>
</div>

<style lang="scss">
	nav {
		background-color: rgba(56, 61, 93, 0.9);
		border-bottom: 6px solid $palette-light;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		position: fixed;
		top: -86px;
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

	li {
		align-items: center;
		display: flex;
	}

	li:not(:last-of-type) {
		margin: 0 72px 0 0;
	}

	.isNavOpen nav {
		top: 0;
	}
</style>
