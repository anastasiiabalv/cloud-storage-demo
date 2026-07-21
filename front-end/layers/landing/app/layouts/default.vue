<template>
  <div>
    <LndNavBar/>

    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@reference '../../../shared/main-shared.css'
@import "../assets/css/main-landing.css";
@import "../assets/css/navbar.css";

</style>