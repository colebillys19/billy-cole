<script lang="ts">
	import IconButton from '$lib/icon-button.svelte';

	import store from '../store';
	import ss3MobileImgA from '../images/ss3-mobile-a.jpg';
	import ss3MobileImgB from '../images/ss3-mobile-b.jpg';
	import ss3MobileImgC from '../images/ss3-mobile-c.jpg';
	import LeftChevIcon from '../svgComponents/left-chev-icon.svelte';
	import RightChevIcon from '../svgComponents/right-chev-icon.svelte';

	const { isDarkMode } = store;

	let imgIndex = 0;

	const handleLeftClick = () => {
		if (imgIndex > 0) {
			imgIndex = imgIndex - 1;
		}
	};

	const handleRightClick = () => {
		if (imgIndex < 2) {
			imgIndex = imgIndex + 1;
		}
	};
</script>

<div class="container">
	<IconButton handleClick={handleLeftClick} isOpaque={imgIndex === 0}>
		<LeftChevIcon />
	</IconButton>
	<div class="imagesContainer" style={`outline: 3px solid ${$isDarkMode ? '#e68a6e' : '#5d5c7b'};`}>
		<div
			class="imagesSubcontainer"
			style={`background-color: ${$isDarkMode ? '#e68a6e' : '#5d5c7b'}; left: ${
				imgIndex * -310
			}px;`}
		>
			<img src={ss3MobileImgA} alt="ss3-mobile" />
			<img src={ss3MobileImgB} alt="ss3-mobile" />
			<img src={ss3MobileImgC} alt="ss3-mobile" />
		</div>
	</div>
	<IconButton handleClick={handleRightClick} isOpaque={imgIndex === 2}>
		<RightChevIcon />
	</IconButton>
</div>

<style lang="scss">
	img {
		width: 300px;
	}

	img:not(:last-of-type) {
		margin-right: 10px;
	}

	.container {
		align-items: center;
		display: inline-flex;
	}

	.imagesContainer {
		height: 533px;
		overflow: hidden;
		position: relative;
		width: 300px;
	}

	.imagesSubcontainer {
		display: flex;
		position: absolute;
		transition: left 500ms ease;
	}
</style>
