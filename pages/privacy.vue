<template>
	<div class="p-10">
		<h1 class="text-3xl">Privacy Policy</h1>
		<p>This app is under development and currently only stores the username from external identity providers, which
			includes:</p>
		<ul class="list-disc">
			<li>Microsoft</li>
			<li>Twitter</li>
			<li>Google</li>
			<li>LinkedIn</li>
			<li>GitHub</li>
			<li>Pinterest</li>
			<li>Facebook</li>
		</ul>
		<p>Additionally, when logging in with Google or Microsoft, the Email is also stored, as is the case when Email
			is provided by the user when logging in with any other provider than those two.</p>
		<p>Neither username nor email is or will ever be shared with any third party.</p>
	</div>
</template>

<script lang="ts" setup>

</script>

<script lang="ts">
export default {
	name: "privacy"
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>

</style>
