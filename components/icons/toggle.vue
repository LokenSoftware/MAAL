<template>
	<img :style="{height: height, width: width}" alt="&dtdot;" src="assets/svg/toggle.svg">
</template>

<script lang="ts" setup>

</script>

<script lang="ts">
export default {
	name: "toggle",
	props: {
		width: {
			type: String,
			default: "1.5rem"
		},
		height: {
			type: String,
			default: "1.5rem"
		}
	}
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>

</style>
