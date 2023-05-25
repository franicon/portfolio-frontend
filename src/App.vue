<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from "@/components/layout/main-nav.vue";
</script>

<template>
  <div class="">
    <div class="sm:max-w-screen-2xl mx-auto  py-8 md:px-8 px-4 ">
      <main-nav/>
      <RouterView />
    </div>
  </div>

</template>

