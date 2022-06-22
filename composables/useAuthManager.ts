import { onMounted, ref } from "#build/imports";
import type { Ref } from "@vue/reactivity";
import { AuthManager } from "~/services/authManager";

export default function(): Ref<AuthManager | null>
{
	const manager = ref<AuthManager | null>(null);
	onMounted(() =>
	{
		manager.value = new AuthManager();
	});
	return manager;
}
