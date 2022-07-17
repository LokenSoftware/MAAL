<template>
	<div>
		<div :class="{hidden: !showModal}" class="fixed flex h-screen w-screen z-40">
			<div class="m-auto Modal bg-gray-800 shadow-2xl rounded z-50">
				<div class="p-3 border-b border-gray-700">
					<slot name="header"></slot>
				</div>
				
				<div class="p-3">
					<slot></slot>
				</div>
				
				<div class="p-3">
					<slot name="footer"></slot>
				</div>
			</div>
			<div class="absolute bg-opacity-30 bg-gray-900 w-full h-full" v-on:click="hide" />
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<script lang="ts">
// noinspection JSUnusedGlobalSymbols
export default {
	name: "modal",
	data()
	{
		return {
			showModal: false
		};
	},
	expose: ["show", "hide", "toggle"],
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
		}
	}
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>

</style>
