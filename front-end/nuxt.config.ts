import tailwindcss from '@tailwindcss/vite'
import {fileURLToPath} from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: {enabled: true},

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@shared': fileURLToPath(new URL('./packages/shared', import.meta.url))
			}
		}
	},
	
	modules: ['@nuxt/fonts', '@nuxt/image'],
	fonts: {
		adobe: {
			id: 'dhn6rwq'
		},
		families: [
			{name: 'Ariana Pro', provider: 'adobe'},
			{name: 'All Round Gothic', provider: 'adobe'}
		]
	},

	extends: ['./packages/shared']
})
