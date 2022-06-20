import { useState } from "#app";
import { onMounted, ref } from "#build/imports";
import { OidcClientSettings, UserManager } from "oidc-client";

export default function()
{
	const manager = ref<UserManager | null>(null);
	onMounted(() =>
	{
		const settings: OidcClientSettings = {
			authority: "https://accounts.google.com/o/oauth2/v2/auth",
			client_id: process.env.NUXT_ENV_CLIENT_ID,
			client_secret: process.env.NUXT_ENV_CLIENT_SECRET,
			scope: "openid profile",
			redirect_uri: `${window.location.origin}/signin-callback`,
			post_logout_redirect_uri: `${window.location.origin}/logout-redirect`,
		};
		manager.value = new UserManager(settings);
		console.log(manager);
	});
	return useState<UserManager | null>("userManager", () => manager);
}
