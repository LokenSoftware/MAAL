<template>
	<div>
		<Head>
			<Title>Personal Website</Title>
			<Meta content="Mathias Amandus Andvik Løken - Personal website" name="description" />
			<Meta lang="en" />
		</Head>
		
		<NuxtLayout name="standard">
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
import { useHead } from "#head";

useHead({
	titleTemplate: title => `MAAL - ${title}`
});
</script>

<script lang="ts">

</script>

<style lang="postcss">
body
{
	@apply bg-gray-800 text-gray-100 mb-5;
	font-family: "Segoe UI Light", sans-serif;
}
</style>

<style lang="postcss" scoped>

</style>
