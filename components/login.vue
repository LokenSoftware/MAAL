<template>
	<WrapModal ref="modal">
		<template v-slot:header>
			<h5 class="text-xl">Login</h5>
		</template>
		
		<form :action="`${config.BACKEND_URL}/V1/Login?${returnUrl}`" method="post">
			<div class="flex flex-col gap-3">
				<button :value="IdentityProvider.facebook" class="LoginButton" name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/Facebook.png" />
					<span class="text-center">Continue with Facebook</span>
				</button>
				<!-- GitHub only supports one redirect url, meaning we can only do this in production -->
				<button :value="IdentityProvider.gitHub" class="LoginButton" name="provider" type="submit"
					:disabled="config.ENVIRONMENT !== 'Production'">
					<img alt="Logo" class="h-full aspect-square" src="/GitHub.png" />
					<span class="text-center">Continue with GitHub</span>
				</button>
				<button :value="IdentityProvider.google" class="LoginButton" name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/Google.png" />
					<span class="text-center">Continue with Google</span>
				</button>
				<button :value="IdentityProvider.linkedIn" class="LoginButton" disabled name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/LinkedIn.png" />
					<span class="text-center">Continue with LinkedIn</span>
				</button>
				<button :value="IdentityProvider.MAAL" class="LoginButton" disabled name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/MAAL.png" />
					<span class="text-center">Continue with MAAL</span>
				</button>
				<button :value="IdentityProvider.microsoft" class="LoginButton" name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/Microsoft.png" />
					<span class="text-center">Continue with Microsoft</span>
				</button>
				<button :value="IdentityProvider.pinterest" class="LoginButton" disabled name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/Pinterest.png" />
					<span class="text-center">Continue with Pinterest</span>
				</button>
				<button :value="IdentityProvider.twitter" class="LoginButton" name="provider" type="submit">
					<img alt="Logo" class="h-full aspect-square" src="/Twitter.png" />
					<span class="text-center">Continue with Twitter</span>
				</button>
			</div>
		</form>
		
		<template v-slot:footer>
			<div class="flex gap-3">
				<input class="Input" disabled placeholder="Email" type="email" />
				<input class="Input" disabled placeholder="Password" type="password" />
			</div>
			<div class="flex justify-end mt-3">
				<button class="Btn Purple" disabled name="provider" type="submit">
					Submit
				</button>
			</div>
		</template>
	</WrapModal>
</template>

<script lang="ts" setup>
import { useRuntimeConfig } from "#app";
import { IdentityProvider } from "~/enums/identityProvider";

const config = useRuntimeConfig().public;
</script>

<script lang="ts">
export default {
	name: "login",
	data()
	{
		return {
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
		}
	}
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>
.LoginButton
{
	@apply shadow p-3 rounded bg-gray-700 flex disabled:bg-gray-500 disabled:text-gray-300 hover:bg-gray-600;
	
	:last-child
	{
		@apply w-full;
	}
	
	*
	{
		@apply h-5;
	}
}
</style>
