<script lang="ts">
	import IconButton from '$lib/misc/icon-button.svelte';

	import store from '../../store';
	import LeftChevIcon from '../../svgComponents/left-chev-icon.svelte';
	import RightChevIcon from '../../svgComponents/right-chev-icon.svelte';

	const { isDarkMode } = store;

	export let numToShow = 0;

	let imgIndex = 0;

	$: numPages = 16 - numToShow;

	const handleLeftClick = () => {
		if (imgIndex > 0) {
			imgIndex = imgIndex - 1;
		}
	};

	const handleRightClick = () => {
		if (imgIndex <= numPages) {
			imgIndex = imgIndex + 1;
		}
	};
</script>

<div class:isCenter={numToShow < 3} class:isDarkMode={$isDarkMode} class="container">
	<IconButton
		ariaLabel={`previous image${imgIndex === 0 ? ', disabled' : ''}`}
		handleClick={handleLeftClick}
		isDisabled={imgIndex === 0}
	>
		<LeftChevIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} />
	</IconButton>
	<div
		class:showOne={numToShow === 1}
		class:showTwo={numToShow === 2}
		class:showThree={numToShow === 3}
		class="imagesContainer"
	>
		<div class="imagesSubcontainer" style={`left: ${imgIndex * -322}px;`}>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-a.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908681/billycole.dev/ss3-mobile-b.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908681/billycole.dev/ss3-mobile-c.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-d.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908681/billycole.dev/ss3-mobile-e.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908681/billycole.dev/ss3-mobile-f.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-g.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908681/billycole.dev/ss3-mobile-h.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908681/billycole.dev/ss3-mobile-i.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-j.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-k.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908683/billycole.dev/ss3-mobile-l.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908683/billycole.dev/ss3-mobile-m.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908683/billycole.dev/ss3-mobile-n.jpg"
				alt="ss3-mobile"
			/>
			<img
				src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908682/billycole.dev/ss3-mobile-o.jpg"
				alt="ss3-mobile"
			/>
		</div>
	</div>
	<IconButton
		ariaLabel={`next image${imgIndex > numPages - 2 ? ', disabled' : ''}`}
		handleClick={handleRightClick}
		isDisabled={imgIndex > numPages - 2}
	>
		<RightChevIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} />
	</IconButton>
</div>

<style lang="scss">
	img {
		border: 3px solid $palette-extra-dark;
		width: 300px;
	}

	img:not(:last-of-type) {
		margin-right: 22px;
	}

	.container {
		align-items: center;
		display: flex;
		margin-bottom: 24px;
	}

	.imagesContainer {
		height: 533px;
		overflow: hidden;
		position: relative;
	}

	.imagesSubcontainer {
		display: flex;
		position: absolute;
		transition: left 500ms ease;
	}

	.showOne {
		width: 300px;
	}

	.showTwo {
		width: 622px;
	}

	.showThree {
		width: 944px;
	}

	.isCenter {
		justify-content: center;
	}

	// DARK

	.isDarkMode img {
		border: 3px solid $palette-light;
	}
</style>
