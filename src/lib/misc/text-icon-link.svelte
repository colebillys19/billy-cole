<script lang="ts">
	import store from '../../store';

	const { isDarkMode } = store;

	export let ariaLabel = '';
	export let handleClick: () => void = () => null;
	export let href = '#';
	export let isIconRight = false;
	export let isNav = false;

	const onClick = (e: MouseEvent) => {
		if (handleClick() !== null) {
			e.preventDefault();
			handleClick();
		}
	};
</script>

<a class:isDarkMode={$isDarkMode} on:click={onClick} aria-label={ariaLabel} {href} {...$$restProps}>
	<div class:isIconRight>
		<slot name="icon" />
	</div>
	<span class:isIconRight class:isNav class:bigLink={!isNav}>
		<slot name="text" />
	</span>
</a>

<style lang="scss">
	a {
		align-items: center;
		display: inline-flex;
		text-decoration: none;
	}

	div {
		align-items: center;
		display: flex;
		order: 1;
	}

	span {
		margin-left: 13px;
		order: 2;
	}

	div.isIconRight {
		order: 2;
	}

	span.isIconRight {
		margin: 0 13px 0 0;
		order: 1;
	}

	.isNav {
		font-size: 20px;
		margin-left: 16px;
	}

	.isIconRight.isNav {
		margin: 0 16px 0 0;
	}
</style>
