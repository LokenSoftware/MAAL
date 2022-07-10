<template>
	<div>
		<div :class="{hidden: !showModal}" class="fixed flex h-screen w-screen z-40">
			<form :action="`${config.BACKEND_URL}/V1/Login?${returnUrl}`"
				method="post"
				class="m-auto container bg-gray-800 shadow-2xl rounded z-50">
				<div class="p-3 border-b border-gray-700">
					<h5 class="text-xl">Login</h5>
				</div>
				
				<div class="p-3">
					<button disabled
						class="btn purple"
						name="provider"
						type="submit"
						:value="IdentityProvider.microsoft">
						Microsoft
					</button>
					<button class="btn purple" name="provider" type="submit" :value="IdentityProvider.google">
						Google
					</button>
					<button disabled class="btn purple" name="provider" type="submit" :value="IdentityProvider.twitter">
						Twitter
					</button>
					<button disabled
						class="btn purple"
						name="provider"
						type="submit"
						:value="IdentityProvider.linkedIn">
						LinkedIn
					</button>
				</div>
				
				<div class="p-3">
					<div class="flex gap-3">
						<input class="input" placeholder="Email" type="email" />
						<input class="input" placeholder="Password" type="password" />
					</div>
					<div class="flex justify-end mt-3">
						<button type="button" class="btn purple" v-on:click="logout">
							Logout
						</button>
						<button class="btn purple"
							type="submit"
							name="provider"
							:value="IdentityProvider.MAAL"
							disabled
							v-on:click="test">
							Submit
						</button>
					</div>
				</div>
			</form>
			<div class="absolute bg-opacity-30 bg-gray-900 w-full h-full" v-on:click="hide" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from "#app";
import { IdentityProvider } from "~/enums/identityProvider";

const config = useRuntimeConfig().public;
</script>

<script lang="ts">
export default {
	name: "login",
	expose: ["show", "hide", "toggle"],
	data()
	{
		return {
			showModal: false,
			returnUrl: {
				type: URLSearchParams,
				value: null
			}
		};
	},
	mounted(): void
	{
		this.returnUrl = new URLSearchParams({ returnUrl: "/" });
	},
	methods: {
		show(): void
		{
			this.showModal = true;
		},
		hide(): void
		{
			this.showModal = false;
		},
		toggle(): void
		{
			this.showModal = !this.showModal;
		},
		async test(): Promise<void>
		{
			console.info("TODO");
		},
		async logout(): Promise<void>
		{
			const init: RequestInit = {
				method: "POST",
				credentials: "include"
			};
			const res = await fetch(this.config.BACKEND_URL + "/V1/Login/Logout", init);
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
/* TODO: animate modal backdrop */
.backdrop
{
	animation-duration: 300ms;
	animation-fill-mode: forwards;
	animation-name: backdrop-in;
	animation-timing-function: ease-out;
}

@keyframes backdrop-in
{
	from
	{
	}
	to
	{
	}
}
</style>
