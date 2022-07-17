<template>
	<div>
		<Login ref="login" />
		<Profile ref="profile" />
		
		<!-- Sidebar -->
		<aside :class="{Show: show}" class="Sidebar z-50">
			<div class="SidebarHeader">
				<button class="NavElement Square" v-on:click="hideSidebar">
					<IconsToggle />
				</button>
			</div>
			<a class="SidebarElement Title" href="https://github.com/MathiasFrost" target="_blank">GitHub</a>
		</aside>
		
		<!-- Backdrop -->
		<div v-if="show" class="Backdrop z-40" v-on:click="hideSidebar" />
		
		<!-- Header -->
		<header class="fixed w-screen z-30">
			<nav :class="{scrolled: scrolled}" class="Nav">
				<div class="flex gap-3 mr-auto">
					<button class="NavElement Square" v-on:click="showSidebar">
						<IconsToggle />
					</button>
					<RouterLink class="NavElement Rectangle Title" to="/">
						Home
					</RouterLink>
				</div>
				<div class="flex gap-3">
					<button v-if="user" class="NavElement Rectangle Title" v-on:click="showProfile">
						{{ user.name }}
					</button>
					<button v-else class="NavElement Rectangle Title" v-on:click="showLogin">
						Login
					</button>
				</div>
			</nav>
		</header>
		
		<!-- Page -->
		<main class="pt-10">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
import { useUserManager } from "#imports";

const user = useUserManager();
</script>

<script lang="ts">
export default {
	name: "standard",
	data()
	{
		return {
			scrolled: false,
			show: false
		};
	},
	mounted(): void
	{
		window.addEventListener("scroll", this.checkNav);
		this.checkNav();
	},
	unmounted(): void
	{
		window.removeEventListener("scroll", this.checkNav);
	},
	methods: {
		checkNav(): void
		{
			this.scrolled = window.scrollY !== 0;
		},
		showSidebar(): void
		{
			this.show = true;
		},
		hideSidebar(): void
		{
			this.show = false;
		},
		showLogin(): void
		{
			this.$refs.login.show();
		},
		showProfile(): void
		{
			this.$refs.profile.show();
		}
	}
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>
.Nav
{
	@apply flex h-12 pl-3 pr-3 bg-gray-800 bg-opacity-0 transition-colors duration-300;
	
	&.scrolled
	{
		@apply bg-opacity-100;
	}
}

.NavElement
{
	@apply uppercase rounded mt-auto mb-auto bg-gray-300 bg-opacity-0 hover:bg-opacity-30 transition-colors duration-200;
	
	&.Square
	{
		@apply p-1;
	}
	
	&.Rectangle
	{
		@apply pr-3 pl-3 pt-1 pb-1;
	}
}

.Sidebar
{
	transform: translateX(-13rem);
	transition: transform 300ms;
	transition-timing-function: cubic-bezier(0.06, 0.8, 0.68, 0.96);
	@apply h-screen fixed w-52 bg-gray-800 shadow-2xl;
	
	&.Show
	{
		transform: translateX(0);
	}
	
	.SidebarElement
	{
		@apply block pt-3 pb-3 pl-5 pr-5 w-full hover:bg-gray-700 transition-colors duration-300;
	}
	
	.SidebarHeader
	{
		@apply h-12 pl-3 flex border-b border-b-gray-500;
	}
}

.Backdrop
{
	@apply bg-gray-800 opacity-50 fixed h-screen w-screen;
}
</style>
