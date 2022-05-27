<script lang="ts">
	import store from '../store';
	import loanhengeImg from '../images/loanhenge.jpg';
	import ss3MobileImgA from '../images/ss3-mobile-a.jpg';
	import ss3MobileImgB from '../images/ss3-mobile-b.jpg';
	import ss3MobileImgC from '../images/ss3-mobile-c.jpg';
	import HomeSectionContainer from './home-section-container.svelte';

	const { isDarkMode, workOffset } = store;

	const updateOffset = (offset: number): void => {
		workOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorB" name="work" {updateOffset}>
	<div class:isDarkMode={$isDarkMode}>
		<h3>Your Mortgage Online</h3>
		<img class="ss3MobileImg" src={ss3MobileImgA} alt="ss3-mobile" />
		<img class="ss3MobileImg" src={ss3MobileImgB} alt="ss3-mobile" />
		<img class="ss3MobileImg" src={ss3MobileImgC} alt="ss3-mobile" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
		<h3>Loanhenge</h3>
		<img class="loanhengeImg" src={loanhengeImg} alt="loanhenge" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
		<h3>Victory Templates</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero ipsam, porro placeat
			eaque tempora id labore cumque velit tenetur hic nam inventore quia quod sit non voluptatum
			excepturi itaque.
		</p>
	</div>
</HomeSectionContainer>

<style lang="scss">
	img {
		display: inline-block;
	}

	.loanhengeImg {
		width: 998px;
	}

	.ss3MobileImg {
		width: 361px;
	}

	// dark

	.isDarkMode p {
		color: $palette-a;
	}
</style>
