<script lang="ts">
	export let className: string = '';
	export let name: string = '';
</script>

<section class={className}>
	<h2>{name}</h2>
	<slot />
</section>

<style>
	section {
		min-height: 100vh;
		padding: 30px 60px;
	}
</style>
