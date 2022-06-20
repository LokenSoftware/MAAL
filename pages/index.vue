<template>
	<div>
		<img alt="logo" class="logo pt-5" src="/ml.svg" />
		<hr class="m-auto mt-5 title-hr origin-left" style="max-width: 50rem; width: 90%;" />
		<div
				class="w-5/6 mt-1 flex sm:gap-3 gap-0.5 h-12 m-auto sm:text-xl uppercase overflow-clip"
				style="max-width: 40rem;">
			<h1 v-for="letter in title" class="select-none letter">{{ letter === " " ? "&nbsp;" : letter }}</h1>
		</div>
		<div class="content-container mt-5">
			<span
					:style="{color: text === '\u0001' ? 'transparent' : ''}"
					class="caret selection:bg-gray-400 selection:bg-opacity-50">{{ text }}</span>
		</div>
		<div :style="{transform: `translateY(${backdropOffset}px)`}" class="backdrop"></div>
	</div>
</template>

<script lang="ts" setup>

</script>

<script lang="ts">
import { AnimationHelper } from "~/helpers/AnimationHelper";

export default {
	name: "index",
	data()
	{
		return {
			backdropOffset: 0,
			text: "\u0001",
			title: []
		};
	},
	mounted(): void
	{
		window.addEventListener("scroll", this.parallax);
		AnimationHelper.animateHomePageTitle(text => this.title = text, 100);
		AnimationHelper.animateHomePageText(text => this.text = text, 4_000);
	},
	unmounted(): void
	{
		window.removeEventListener("scroll", this.parallax);
	},
	methods: {
		parallax(): void
		{
			this.backdropOffset = window.scrollY * -0.2;
		}
	}
};
</script>

<style lang="postcss">

</style>

<style lang="postcss" scoped>
@keyframes logo-in
{
	from
	{
		opacity: 0;
		transform: scale(0.1);
	}
	to
	{
		opacity: 1;
		transform: scale(1);
	}
}

@keyframes backdrop-in
{
	from
	{
		filter: saturate(0%) opacity(0%) blur(1rem);
	}
	to
	{
		filter: saturate(40%) opacity(40%) blur(0);
	}
}

@keyframes title-in
{
	from
	{
		opacity: 0;
		transform: translateX(3rem);
	}
	to
	{
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes hr-in
{
	from
	{
		transform: scaleX(0);
	}
	to
	{
		
		transform: scaleX(1);
	}
}

.title-hr
{
	animation-delay: 2800ms;
	animation-duration: 300ms;
	animation-fill-mode: forwards;
	animation-name: hr-in;
	animation-timing-function: linear;
	transform: scaleX(0);
}

.letter
{
	animation-duration: 300ms;
	animation-fill-mode: forwards;
	animation-name: title-in;
	animation-timing-function: cubic-bezier(0.24, 0.59, 0.71, 0.95);
	opacity: 0;
}

.logo
{
	@apply m-auto mt-5 rounded shadow-2xl pointer-events-none select-none;
	animation-delay: 3200ms;
	animation-duration: 300ms;
	animation-fill-mode: forwards;
	animation-name: logo-in;
	animation-timing-function: cubic-bezier(.33, .2, .4, 1.3);
	opacity: 0;
	width: 10rem;
}

.backdrop
{
	animation-duration: 900ms;
	animation-fill-mode: forwards;
	animation-name: backdrop-in;
	background-color: inherit;
	background-image: url("/header.png");
	background-position-x: 50%;
	background-position-y: -20vw;
	background-size: cover;
	height: 100%;
	mask-image: linear-gradient(to top, transparent, transparent 10%, white 20%, white);
	position: fixed;
	top: 0;
	width: 100%;
	z-index: -10;
	
	@media (max-width: 600px)
	{
		mask-image: linear-gradient(to top, transparent, transparent 20%, white 30%, white);
	}
	
	@media (max-width: 1000px)
	{
		mask-image: linear-gradient(to top, transparent, transparent 25%, white 35%, white);
	}
	
	@media (max-width: 1600px)
	{
		@media (min-width: 600px)
		{
			mask-image: linear-gradient(to top, transparent, transparent 30%, white 40%, white);
		}
	}
}
</style>
