<script lang="ts">
	import CloseIcon from '../svgComponents/close-icon.svelte';
	import MonitorIcon from '../svgComponents/monitor-icon.svelte';
	import BulbIcon from '../svgComponents/bulb-icon.svelte';
	import UserIcon from '../svgComponents/user-icon.svelte';
	import MailIcon from '../svgComponents/mail-icon.svelte';

	const handleLinkClick = () => {
		// close menu
	};
</script>

<nav>
	<button>
		<CloseIcon />
	</button>
	<ul>
		<li>
			<a on:click={handleLinkClick} href="#work">
				<MonitorIcon />
				<span>work</span>
			</a>
		</li>
		<li>
			<a on:click={handleLinkClick} href="#blog">
				<BulbIcon />
				<span>blog</span>
			</a>
		</li>
		<li>
			<a on:click={handleLinkClick} href="#about">
				<UserIcon />
				<span>about</span>
			</a>
		</li>
		<li>
			<a on:click={handleLinkClick} href="#contact">
				<MailIcon />
				<span>contact</span>
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: rgba(56, 61, 93, 0.9);
		height: 320px;
		left: 0;
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 2;
	}

	ul {
		list-style: none;
		margin: 30px 0 0 0;
		padding: 0;
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
		left: 0;
		position: absolute;
		top: 0;
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
</style>
