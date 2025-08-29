import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import lqip from 'vite-plugin-lqip';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		lqip({
			sharp: {
				/** @see https://sharp.pixelplumbing.com/api-resize */
				resize: {
					width: 32,
					height: 32,
					fit: 'inside',
				},
				/** @see https://sharp.pixelplumbing.com/api-output#webp */
				webp: {
					smartSubsample: true,
				},
			},
		}),
	],
});
