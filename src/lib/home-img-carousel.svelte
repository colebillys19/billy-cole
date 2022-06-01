<script lang="ts">
	import IconButton from '$lib/icon-button.svelte';

	import store from '../store';
	import ss3MobileImgA from '../images/ss3-mobile-a.jpg';
	import ss3MobileImgB from '../images/ss3-mobile-b.jpg';
	import ss3MobileImgC from '../images/ss3-mobile-c.jpg';
	import ss3MobileImgD from '../images/ss3-mobile-d.jpg';
	import ss3MobileImgE from '../images/ss3-mobile-e.jpg';
	import ss3MobileImgF from '../images/ss3-mobile-f.jpg';
	import ss3MobileImgG from '../images/ss3-mobile-g.jpg';
	import ss3MobileImgH from '../images/ss3-mobile-h.jpg';
	import ss3MobileImgI from '../images/ss3-mobile-i.jpg';
	import ss3MobileImgJ from '../images/ss3-mobile-j.jpg';
	import ss3MobileImgK from '../images/ss3-mobile-k.jpg';
	import ss3MobileImgL from '../images/ss3-mobile-l.jpg';
	import ss3MobileImgM from '../images/ss3-mobile-m.jpg';
	import ss3MobileImgN from '../images/ss3-mobile-n.jpg';
	import ss3MobileImgO from '../images/ss3-mobile-o.jpg';
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
		if (imgIndex < 14) {
			imgIndex = imgIndex + 1;
		}
	};
</script>

<div class="container">
	<IconButton handleClick={handleLeftClick} isDisabled={imgIndex === 0}>
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
			<img src={ss3MobileImgD} alt="ss3-mobile" />
			<img src={ss3MobileImgE} alt="ss3-mobile" />
			<img src={ss3MobileImgF} alt="ss3-mobile" />
			<img src={ss3MobileImgG} alt="ss3-mobile" />
			<img src={ss3MobileImgH} alt="ss3-mobile" />
			<img src={ss3MobileImgI} alt="ss3-mobile" />
			<img src={ss3MobileImgJ} alt="ss3-mobile" />
			<img src={ss3MobileImgK} alt="ss3-mobile" />
			<img src={ss3MobileImgL} alt="ss3-mobile" />
			<img src={ss3MobileImgM} alt="ss3-mobile" />
			<img src={ss3MobileImgN} alt="ss3-mobile" />
			<img src={ss3MobileImgO} alt="ss3-mobile" />
		</div>
	</div>
	<IconButton handleClick={handleRightClick} isDisabled={imgIndex === 14}>
		<RightChevIcon color={$isDarkMode ? '#fffeef' : '#383d5d'} />
	</IconButton>
</div>

<style lang="scss">
	img {
		width: 300px;
		border-radius: 6px;
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
