import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			test: {
				globals: true,
				setupFiles: [
					'src/lib/test-setup.js'
				],
				environment: 'jsdom'
			}
		}
	}
};

export default config;
