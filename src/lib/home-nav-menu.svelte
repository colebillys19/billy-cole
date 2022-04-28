<script lang="ts">
	import BulbIcon from '../svgComponents/bulb-icon.svelte';
	import CloseIcon from '../svgComponents/close-icon.svelte';
	import HamburgerIcon from '../svgComponents/hamburger-icon.svelte';
	import MailIcon from '../svgComponents/mail-icon.svelte';
	import MonitorIcon from '../svgComponents/monitor-icon.svelte';
	import MoonIcon from '../svgComponents/moon-icon.svelte';
	import SunIcon from '../svgComponents/sun-icon.svelte';
	import UserIcon from '../svgComponents/user-icon.svelte';
	import store from '../store';

	const { isDarkMode, isNavOpen } = store;

	let innerWidth = 0;

	const handleOpenMenu = () => {
		isNavOpen.set(true);
	};

	const handleCloseMenu = () => {
		isNavOpen.set(false);
	};

	const toggleDarkMode = () => {
		isDarkMode.update((prevIsDark) => {
			if (!prevIsDark) {
				localStorage.setItem('isDarkMode', 'true');
			} else if (prevIsDark && localStorage.getItem('isDarkMode')) {
				localStorage.removeItem('isDarkMode');
			}
			return !prevIsDark;
		});
	};
</script>

<svelte:window bind:innerWidth />
<div on:click={handleCloseMenu} class={`navContainer ${$isNavOpen ? 'isNavOpen' : ''}`}>
	<nav class:isDesktop={innerWidth >= 960} on:click|stopPropagation={null}>
		<button on:click={handleOpenMenu} class="openButton">
			<HamburgerIcon />
		</button>
		<button on:click={handleCloseMenu} class="closeButton">
			<CloseIcon />
		</button>
		<ul>
			<li>
				<a on:click={handleCloseMenu} href="#work">
					<MonitorIcon />
					<span>work</span>
				</a>
			</li>
			<li>
				<a on:click={handleCloseMenu} href="#blog">
					<BulbIcon />
					<span>blog</span>
				</a>
			</li>
			<li>
				<a on:click={handleCloseMenu} href="#about">
					<UserIcon />
					<span>about</span>
				</a>
			</li>
			<li>
				<a on:click={handleCloseMenu} href="#contact">
					<MailIcon />
					<span>contact</span>
				</a>
			</li>
		</ul>
		<button on:click={toggleDarkMode} class="darkLightButton">
			{#if $isDarkMode}
				<SunIcon />
			{:else}
				<MoonIcon color="#fffeef" />
			{/if}
		</button>
	</nav>
</div>

<style lang="scss">
	nav {
		background-color: rgba(56, 61, 93, 0.9);
		border-bottom-color: $palette-c;
		border-bottom-style: solid;
		border-bottom-width: 6px;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		position: relative;
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

	a {
		align-items: center;
		color: $palette-a;
		display: inline-flex;
		font-size: 24px;
		justify-content: center;
		text-decoration: none;
	}

	a span {
		margin-left: 12px;
	}

	.navContainer {
		height: 100vh;
		left: 0;
		position: fixed;
		top: -100vh;
		width: 100vw;
		z-index: 2;
		transition: top 360ms ease-in-out;
	}

	.isNavOpen {
		top: 0;
	}

	.openButton {
		left: 10px;
		position: absolute;
		top: calc(100vh + 10px);
		transition: top 360ms ease-in-out;
	}

	.isNavOpen .openButton {
		top: calc(-100vh - 10px);
	}

	.isDesktop {
		border-bottom-width: 4px;
	}

	.isDesktop ul {
		display: flex;
		margin: 0;
		align-items: center;
	}

	.isDesktop li {
		margin: 0;
	}

	.isDesktop li:not(:last-of-type) {
		margin: 0 60px 0 0;
	}
</style>
