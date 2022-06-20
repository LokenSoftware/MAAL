import { useState } from "#app";
import { ref, useUserManager } from "#imports";
import { User } from "~/models/user";

export default async function()
{
	const manager = useUserManager();
	const user = ref<User | null>(null);
	if (manager.value)
	{
		const oidcUser = await manager.value.getUser();
		user.value = { email: oidcUser.profile.email };
	}
	return useState<User | null>("user", () => user);
}
