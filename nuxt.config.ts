import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/main.pcss"],
	runtimeConfig: {
		public: {
			backendUrl: process.env.backendUrl
		}
	}
});
