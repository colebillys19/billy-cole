<script lang="ts">
	import CloseIcon from '../svgComponents/close-icon.svelte';
	import MonitorIcon from '../svgComponents/monitor-icon.svelte';
	import BulbIcon from '../svgComponents/bulb-icon.svelte';
	import UserIcon from '../svgComponents/user-icon.svelte';
	import MailIcon from '../svgComponents/mail-icon.svelte';
</script>

<nav>
	<CloseIcon />
	<ul>
		<li>
			<a href="#work">
				<MonitorIcon />
				work
			</a>
		</li>
		<li>
			<a href="#blog">
				<BulbIcon />
				blog
			</a>
		</li>
		<li>
			<a href="#about">
				<UserIcon />
				about
			</a>
		</li>
		<li>
			<a href="#contact">
				<MailIcon />
				contact
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: rgba(0, 0, 0, 0.3);
		height: 600px;
		left: 0;
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 2;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
