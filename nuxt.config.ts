import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/main.pcss"],
	runtimeConfig: {
		public: {
			CLIENT_ID: process.env.CLIENT_ID,
			CLIENT_SECRET: process.env.CLIENT_SECRET
		}
	},
});
