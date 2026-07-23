export default defineNuxtConfig({
	extends:['../../nuxt.config.ts'],

	devServer: {
		port: 7002
	},

  app:{
    baseURL:'/dashboard/'
  },

  css:['./app/assets/css/main-dashboard.css'],
	
	
})