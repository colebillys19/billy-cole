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

	const handleWindowClick = (e: MouseEvent) => {
		const classArr = [...e.target.classList];
		if (!classArr.includes('dontCloseNav')) {
			isNavOpen.set(false);
		}
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

<svelte:window bind:scrollY on:click={handleWindowClick} />
<div class:isDarkMode={$isDarkMode} class:isNavOpen={$isNavOpen}>
	<button on:click={handleOpenMenu} class="iconButton openButton dontCloseNav">
		<HamburgerIcon />
	</button>
	<nav class="dontCloseNav">
		<button on:click={handleCloseMenu} class="iconButton closeButton">
			<CloseIcon />
		</button>
		<ul class="dontCloseNav">
			<li>
				<button on:click={() => handleScrollClick($workOffset)}>
					<MonitorIcon />
					<span>work</span>
				</button>
			</li>
			<li>
				<button on:click={() => handleScrollClick($blogOffset)}>
					<BulbIcon />
					<span>blog</span>
				</button>
			</li>
			<li>
				<button on:click={() => handleScrollClick($aboutOffset)}>
					<UserIcon />
					<span>about</span>
				</button>
			</li>
			<li>
				<button on:click={() => handleScrollClick($contactOffset)}>
					<MailIcon />
					<span>contact</span>
				</button>
			</li>
		</ul>
		<button on:click={toggleDarkMode} class="iconButton darkLightButton dontCloseNav">
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
		position: fixed;
		top: -304px;
		transition: top 320ms ease-in-out;
		width: 100vw;
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

	.iconButton {
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

	.openButton {
		left: 10px;
		position: relative;
		top: 10px;
		transition: top 320ms ease-in-out;
		z-index: 1;
	}

	.isDarkMode {
		background-color: $palette-g;
	}

	// nav open

	.isNavOpen nav {
		top: 0;
	}

	.isNavOpen .openButton {
		top: -70px;
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
</style>
