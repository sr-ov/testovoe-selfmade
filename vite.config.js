import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import data from './src/data.json'

export default defineConfig({
	root: resolve(__dirname, 'src'),
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
		},
	},
	plugins: [
		handlebars({
			context: data,
			partialDirectory: resolve(__dirname, 'src', 'partials'),
		}),
		createSvgIconsPlugin({
			iconDirs: [resolve(__dirname, 'src', 'icons')],
			symbolId: '[name]',
			customDomId: '__svg__icons__dom__',
		}),
	],
})
