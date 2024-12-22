import adapter from '@sveltejs/adapter-static';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// Options below are defaults
			pages: 'build',
			assets: 'build',
			strict: false,
			fallback: '404.html'
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
		},
		paths: {
			base: production ? '/anymap' : '',
			assets: production ? 'https://bothness.github.io/anymap' : '',
			relative: false,
		}
	}
};

export default config;
