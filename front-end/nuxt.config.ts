import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: {enabled: true},

	devServer: {
		port: 29563
	},

	vite: {
		plugins: [tailwindcss()]
	},

	css: ['./app/assets/css/main-landing.css', './app/assets/css/navbar.css'],
	modules: ['@nuxt/fonts', '@nuxt/image'],
	fonts: {
		adobe: {
			id: 'dhn6rwq'
		},
		families: [{name: 'Ariana Pro', provider: 'adobe'},
      {name:'All Round Gothic',provider:'adobe'}
    ]
	},

	extends:['./layers/dashboard','./layers/shared'],

	components:[
		{
			path:'./components',
			prefix:'Lnd',
			pathPrefix: false
		}
	]
})
