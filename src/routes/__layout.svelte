<script lang="ts">
	import '../styles/reset.css';
	import '../styles/global.scss';
	import store from '../store';

	const { isDarkMode } = store;

	const toggleDarkMode = () => {
		isDarkMode.update((v) => !v);
	};
</script>

<button on:click={toggleDarkMode} class="toggleDark">toggle dark mode</button>
<main class:isDarkMode={$isDarkMode}>
	<slot />
</main>

<style lang="scss">
	main {
		background-color: $palette-a;
		min-height: 100vh;
	}

	main.isDarkMode {
		background-color: $palette-g;
	}

	:global(main.isDarkMode .bgColorA) {
		background-color: $palette-g;
	}

	:global(main.isDarkMode .bgColorB) {
		background-color: $palette-f;
	}

	:global(.bgColorA) {
		background-color: $palette-a;
	}

	:global(.bgColorB) {
		background-color: $palette-b;
	}

	.toggleDark {
		font-size: 10px;
		position: absolute;
		right: 0;
		top: 0;
	}
</style>
