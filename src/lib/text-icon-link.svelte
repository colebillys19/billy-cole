<script lang="ts">
	export let ariaLabel = '';
	export let handleClick: () => void = () => null;
	export let href = '#';
	export let isExternalLink = false;
	export let isIconRight = false;

	const onClick = (e: MouseEvent) => {
		if (handleClick() !== null) {
			e.preventDefault();
			handleClick();
		}
	};
</script>

<a on:click={onClick} aria-label={ariaLabel} {href} target={isExternalLink ? '_blank' : '_self'}>
	<div class:isIconRight>
		<slot name="icon" />
	</div>
	<span class:isIconRight>
		<slot name="text" />
	</span>
</a>

<style>
	a {
		align-items: center;
		display: inline-flex;
		font-size: 20px;
		text-decoration: none;
	}

	div {
		align-items: center;
		display: flex;
		order: 1;
	}

	span {
		margin-left: 8px;
		order: 2;
	}

	div.isIconRight {
		order: 2;
	}

	span.isIconRight {
		margin: 0 8px 0 0;
		order: 1;
	}
</style>
