<script lang="ts">
	import CloseIcon from '../svgComponents/close-icon.svelte';
	import HamburgerIcon from '../svgComponents/hamburger-icon.svelte';
	import MonitorIcon from '../svgComponents/monitor-icon.svelte';
	import BulbIcon from '../svgComponents/bulb-icon.svelte';
	import UserIcon from '../svgComponents/user-icon.svelte';
	import MailIcon from '../svgComponents/mail-icon.svelte';
	import store from '../store';

	const { isNavOpen } = store;

	const handleOpenMenu = () => {
		isNavOpen.set(true);
	};

	const handleCloseMenu = () => {
		isNavOpen.set(false);
	};
</script>

<div on:click={handleCloseMenu} class={`navContainer ${$isNavOpen ? 'isOpen' : ''}`}>
	<nav on:click|stopPropagation={null}>
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
	</nav>
</div>

<style lang="scss">
	nav {
		background-color: rgba(56, 61, 93, 0.9);
		height: 400px;
		position: relative;
		width: 100vw;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 60px 0 0 0;
		text-align: center;
	}

	li:not(:last-of-type) {
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
		left: 10px;
		position: absolute;
		width: 60px;
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
	}

	.isOpen {
		top: 0;
	}

	.closeButton {
		top: 10px;
	}

	// .isOpen .closeButton {}

	.openButton {
		top: calc(100vh + 10px);
	}

	.isOpen .openButton {
	}
</style>
