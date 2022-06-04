<script lang="ts">
	import store from '../store';

	const { isDarkMode } = store;
</script>

<footer class:isDarkMode={$isDarkMode}>
	<a href="/blog">blog page</a>
</footer>

<style lang="scss">
	footer {
		height: 80px;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	a {
		text-decoration: none;
	}
</style>
