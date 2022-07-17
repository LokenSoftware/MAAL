<template>
	<WrapModal ref="modal">
		<template v-slot:header>
			<h5 class="text-xl">Profile</h5>
		</template>
		
		<table class="table-auto">
			<tbody>
			<tr>
				<td class="font-bold text-gray-300">Logged in with</td>
				<td class="pl-3">{{ user?.provider }}</td>
			</tr>
			<tr>
				<td class="font-bold text-gray-300">Name</td>
				<td class="pl-3">{{ user?.name }}</td>
			</tr>
			<tr>
				<td class="font-bold text-gray-300">Email</td>
				<td class="pl-3">{{ user?.email }}</td>
			</tr>
			</tbody>
		</table>
		
		<template v-slot:footer>
			
			<div class="p-3 flex justify-end">
				<button class="Btn Purple" type="button" v-on:click="logout">
					Logout
				</button>
			</div>
		</template>
	</WrapModal>
</template>

<script lang="ts" setup>
import { useUserManager } from "#imports";

const user = useUserManager();
</script>

<script lang="ts">
import { useRuntimeConfig } from "#app";

export default {
	name: "profile",
	data()
	{
		return {};
	},
	expose: ["show", "hide", "toggle"],
	methods: {
		show(): void
		{
			this.$refs.modal.show();
		},
		hide(): void
		{
			this.$refs.modal.hide();
		},
		toggle(): void
		{
			this.$refs.modal.toggle();
		},
		async logout(): Promise<void>
		{
			const init: RequestInit = {
				method: "POST",
				credentials: "include"
			};
			const res = await fetch(useRuntimeConfig().public.BACKEND_URL + "/V1/Login/Logout", init);
			if (res.ok)
			{
				window.location.replace("/");
			}
		}
	}
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>

</style>
