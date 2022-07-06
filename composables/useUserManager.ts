import { useRuntimeConfig } from "#app";
import { onMounted, ref } from "#build/imports";
import type { Ref } from "@vue/reactivity";
import type { MAALUser } from "~/models/maalUser";

export default function(): Ref<MAALUser | null>
{
	const manager = ref<MAALUser | null>(null);
	onMounted(async () =>
	{
		try
		{
			const init: RequestInit = {
				method: "GET",
				credentials: "include"
			};
			const config = useRuntimeConfig().public;
			const res = await fetch(config.backendUrl + "/V1/User", init);
			if (!res.ok)
			{
				return;
			}
			const user = await res.json();
			if (user)
			{
				manager.value = user;
			}
		}
		catch (e)
		{
			console.info("User is not logged in");
		}
	});
	return manager;
}
