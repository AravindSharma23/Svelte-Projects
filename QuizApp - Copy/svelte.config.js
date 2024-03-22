import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
/*  @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	preprocess: sveltePreprocess()
};

export default config;


//  To install sveltePreprocess using  ->   npm install --save-dev svelte-preprocess @sveltejs/kit @sveltejs/adapter-auto