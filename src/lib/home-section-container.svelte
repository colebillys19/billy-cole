<script lang="ts">
	export let className: string = '';
	export let name: string = '';
</script>

<section class={className}>
	<h1>{name}</h1>
	<slot />
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>
