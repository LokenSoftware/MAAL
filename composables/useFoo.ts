import { useState } from "#app";

export default function()
{
	return useState("foo", () => process.env.NUXT_ENV_CLIENT_ID);
}
