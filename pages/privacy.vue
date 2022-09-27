<template>
	<div class="p-10">
		<h1 class="text-3xl">Privacy Policy</h1>
		<p>This app is under development and currently only stores the username from external identity providers, which
			includes:</p>
		<ul class="list-disc">
			<li>Facebook</li>
			<li>GitHub</li>
			<li>Google</li>
			<li>LinkedIn</li>
			<li>MAAL <em class="text-gray-300">(managed by me)</em></li>
			<li>Microsoft</li>
			<li>Pinterest</li>
			<li>Twitter</li>
		</ul>
		<p>Additionally, when logging in with Google, Facebook or Microsoft, the Email is also stored, as is the case
			when Email is provided by the user when logging in with any other provider than those two.</p>
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

<style lang="pcss">

</style>

<style lang="pcss" scoped>

</style>
