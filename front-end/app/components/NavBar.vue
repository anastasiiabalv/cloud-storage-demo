<template>
  <div class="absolute top-5 right-0 h-30 w-[33%]
      bg-linear-90 to-lightblue from-white">
  </div>

  <div class="relative z-10 m-auto max-w-7xl w-full px-8 top-10 flex 
    items-center justify-between">
    <div class="flex-1 flex justify-start">
      <NuxtLink to="/" class="flex justify-center items-center">
        <NuxtImg src="/img/logo-main.svg" alt="logo" class="h-18 w-auto" draggable="false"/>
        <p class="font-logo text-3xl mt-1 font-semibold ml-1 leading-none">Cloud Base
          <span class="block font-normal text-xl text-green ml-2">Demo</span>
        </p>
      </NuxtLink>
    </div>

    <nav class="flex justify-center items-center gap-15">
      <NuxtLink class="navbar-button" v-for="(val, ind) in topButtons"
        :to="val.to" :key="val.label">
        {{ val.label }}
      </NuxtLink>
    </nav>

    <div class="flex-1 flex justify-end">
      <NuxtLink class="
        text-darkgreen font-main font-semibold px-5 py-3 text-xl rounded-full 
        drop-shadow-xl drop-shadow-gray-200 cursor-pointer 
        bg-[linear-gradient(var(--nav-gradient-angle),var(--color-lightgreen),var(--nav-gradient-color))]

        transition-all duration-500 ease-out hover:scale-103
        hover:[--nav-gradient-angle:180deg] 
        hover:[--nav-gradient-color:var(--color-blue)]
        navbar-transition-gradient">
        Account
      </NuxtLink>
    </div>

  </div>
</template>


<script lang="ts" setup>
const topButtons = ref([
  {label: 'Apps', to:'/apps'},
  {label: 'Pricing', to:'/pricing'},
  {label: 'Resources', to:'/resources'},
  {label: 'Contact', to:'/contact'}
])
</script>

<style scoped>
/* buttons transition */
.slide-enter-active, .slide-leave-active{
  transition: 0.3s all ease;
}

.slide-enter-to, .slide-leave-from{
  position: absolute;
  top:0px;
}

.slide-enter-from, .slide-leave-to{
  position: relative;
}
</style>
