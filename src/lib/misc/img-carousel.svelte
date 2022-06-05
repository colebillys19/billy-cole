<script lang="ts">
	import IconButton from '$lib/misc/icon-button.svelte';

	import LeftChevIcon from '../../svgComponents/left-chev-icon.svelte';
	import RightChevIcon from '../../svgComponents/right-chev-icon.svelte';
	import ss3MobileImgA from '../../images/ss3-mobile-a.jpg';
	import ss3MobileImgB from '../../images/ss3-mobile-b.jpg';
	import ss3MobileImgC from '../../images/ss3-mobile-c.jpg';
	import ss3MobileImgD from '../../images/ss3-mobile-d.jpg';
	import ss3MobileImgE from '../../images/ss3-mobile-e.jpg';
	import ss3MobileImgF from '../../images/ss3-mobile-f.jpg';
	import ss3MobileImgG from '../../images/ss3-mobile-g.jpg';
	import ss3MobileImgH from '../../images/ss3-mobile-h.jpg';
	import ss3MobileImgI from '../../images/ss3-mobile-i.jpg';
	import ss3MobileImgJ from '../../images/ss3-mobile-j.jpg';
	import ss3MobileImgK from '../../images/ss3-mobile-k.jpg';
	import ss3MobileImgL from '../../images/ss3-mobile-l.jpg';
	import ss3MobileImgM from '../../images/ss3-mobile-m.jpg';
	import ss3MobileImgN from '../../images/ss3-mobile-n.jpg';
	import ss3MobileImgO from '../../images/ss3-mobile-o.jpg';

	export let numToShow = 0;

	let imgIndex = 0;

	const handleLeftClick = () => {
		if (imgIndex > 0) {
			imgIndex = imgIndex - 1;
		}
	};

	const handleRightClick = () => {
		if (imgIndex < 12) {
			imgIndex = imgIndex + 1;
		}
	};
</script>

<div class:isCenter={numToShow < 3} class="container">
	<IconButton handleClick={handleLeftClick} isDisabled={imgIndex === 0}>
		<LeftChevIcon color="#383d5d" />
	</IconButton>
	<div
		class:showOne={numToShow === 1}
		class:showTwo={numToShow === 2}
		class:showThree={numToShow === 3}
		class="imagesContainer"
	>
		<div class="imagesSubcontainer" style={`left: ${imgIndex * -322}px;`}>
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
	<IconButton handleClick={handleRightClick} isDisabled={imgIndex > 11}>
		<RightChevIcon color="#383d5d" />
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
</style>
