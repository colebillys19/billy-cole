<script lang="ts">
	import HomeSectionContainer from './home-section-container.svelte';
	import store from '../store';

	const { workOffset } = store;

	const updateOffset = (offset: number): void => {
		workOffset.set(offset);
	};
</script>

<HomeSectionContainer className="bgColorB" name="work" {updateOffset}>
	<p>your mortgage online</p>
	<p>loan vista</p>
	<p>chart templates</p>
</HomeSectionContainer>
