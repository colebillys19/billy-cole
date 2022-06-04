<script lang="ts">
	export let ariaLabel = '';
	export let handleClick: () => void = () => null;
	export let href = '#';
	export let isIconRight = false;
	export let isNavMargin = false;

	const onClick = (e: MouseEvent) => {
		if (handleClick() !== null) {
			e.preventDefault();
			handleClick();
		}
	};
</script>

<a on:click={onClick} aria-label={ariaLabel} {href} {...$$restProps}>
	<div class:isIconRight>
		<slot name="icon" />
	</div>
	<span class:isIconRight class:isNavMargin class="bigLink">
		<slot name="text" />
	</span>
</a>

<style>
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

	.isNavMargin {
		margin-left: 16px;
	}

	div.isIconRight {
		order: 2;
	}

	span.isIconRight {
		margin: 0 13px 0 0;
		order: 1;
	}

	.isIconRight.isNavMargin {
		margin: 0 16px 0 0;
	}
</style>
