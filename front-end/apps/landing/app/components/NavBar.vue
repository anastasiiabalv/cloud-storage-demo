<template>
	<div
		class="to-lightblue absolute top-5 right-0 h-30 w-[33%] bg-linear-90 from-white"></div>

	<div
		class="relative top-10 z-10 m-auto flex w-full max-w-7xl items-center justify-between px-8">
		<div class="flex flex-1 justify-start">
			<NuxtLink to="/" class="flex items-center justify-center">
				<NuxtImg
					src="/img/logo-main.svg"
					alt="logo"
					class="h-18 w-auto"
					draggable="false" />
				<p class="font-logo mt-1 ml-1 text-3xl leading-none font-semibold">
					Cloud Base
					<span class="text-green ml-2 block text-xl font-normal">Demo</span>
				</p>
			</NuxtLink>
		</div>

		<nav class="flex items-center justify-center gap-15">
			<NuxtLink
				class="navbar-button"
				v-for="(val, ind) in topButtons"
				:to="val.to"
				:key="val.label">
				{{ val.label }}
			</NuxtLink>
		</nav>

		<div class="flex flex-1 justify-end">
			<NuxtLink
				class="text-darkgreen font-main navbar-transition-gradient cursor-pointer rounded-full bg-[linear-gradient(var(--nav-gradient-angle),var(--color-lightgreen),var(--nav-gradient-color))] px-5 py-3 text-xl font-semibold drop-shadow-xl drop-shadow-gray-200 transition-all duration-500 ease-out hover:scale-103 hover:[--nav-gradient-angle:180deg] hover:[--nav-gradient-color:var(--color-blue)]">
				Account
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup>
const topButtons = ref([
	{label: 'Apps', to: '/apps'},
	{label: 'Pricing', to: '/pricing'},
	{label: 'Resources', to: '/resources'},
	{label: 'Contact', to: '/contact'}
])
</script>

<style scoped>
/* buttons transition */
.slide-enter-active,
.slide-leave-active {
	transition: 0.3s all ease;
}

.slide-enter-to,
.slide-leave-from {
	position: absolute;
	top: 0px;
}

.slide-enter-from,
.slide-leave-to {
	position: relative;
}
</style>
