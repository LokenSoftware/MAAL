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
			const res = await fetch("https://localhost:4000/V1/User", { credentials: "include" });
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
