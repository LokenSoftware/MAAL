<template>
	<div :class="{hidden: !showModal}" class="fixed flex h-screen w-screen z-40">
		<div class="m-auto container bg-gray-800 shadow-2xl rounded z-50">
			<div class="p-3 border-b border-gray-700">
				<h5 class="text-xl">Login</h5>
			</div>
			
			<div class="p-3">
				<div class="w-fit" ref="googleButton" />
			</div>
			
			<form class="p-3">
				<div class="flex gap-3">
					<input class="input" placeholder="Email" type="email" />
					<input class="input" placeholder="Password" type="password" />
				</div>
				<div class="flex justify-end mt-3">
					<button class="btn purple">Submit</button>
				</div>
			</form>
		</div>
		<div class="absolute bg-opacity-30 bg-gray-900 w-full h-full" v-on:click="hide" />
	</div>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from "#app";
import { useAuthManager } from "#imports";

const config = useRuntimeConfig().public;
const manager = useAuthManager();
</script>

<script lang="ts">
export default {
	name: "login",
	expose: ["show", "hide", "toggle"],
	data()
	{
		return {
			showModal: false
		};
	},
	mounted(): void
	{
		this.initGoogle();
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
		initGoogle(): void
		{
			const script = document.createElement("script");
			script.async = true;
			script.defer = true;
			script.src = "https://accounts.google.com/gsi/client";
			script.addEventListener("load", () =>
			{
				console.log(window.google.accounts);
				window.google.accounts.id.initialize({
					client_id: this.config.CLIENT_ID,
					callback: res => console.log(res.credential)
				});
				window.google.accounts.id.renderButton(this.$refs.googleButton, {theme: "filled_black"});
			});
			
			document.head.appendChild(script);
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
