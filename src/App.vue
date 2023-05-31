<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from "@/components/layout/main-nav.vue"
import ModalPopup from "@/components/ModalPopup.vue"
</script>

<template>
    <ModalPopup/>
  <div class="bg-[url('@/assets/images/download.svg')] duration-500">
    <div class="sm:max-w-screen-2xl mx-auto  py-8 xl:container xl:max-w-screen-xl lg:max-w-6xl xl:px-0 sm:px-8 px-4 transition-all duration-500">
      <main-nav/>
      <RouterView  />
    </div>
  </div>

</template>

