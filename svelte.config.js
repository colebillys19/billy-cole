import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/styles/global.scss';`
		}
	}),
	kit: {
		adapter: adapter(),
		vite: {
			optimizeDeps: {
				include: ['highlight.js', 'highlight.js/lib/core']
			}
		}
	}
};

export default config;
