import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [tsConfigPaths(), react()],
	test: {
		globals: true,
		passWithNoTests: true,
		setupFiles: './setup-tests.ts',
		css: false,
		outputFile: {
			json: 'coverage/report.json',
		},
		coverage: {
			reporter: ['text', 'json', 'html', 'text-summary'],
		},
		clearMocks: true,
		mockReset: true,
		restoreMocks: true,
		unstubGlobals: true,
		unstubEnvs: true,
		include: ['**/?(*.)test.?(c|m)[jt]s?(x)'],
		environment: 'jsdom',
		testTimeout: 20000, // Increase timeout
		hookTimeout: 20000, // Increase hook timeout
		silent: true, // Reduce console noise
	},
});
