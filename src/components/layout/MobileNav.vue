<script setup lang="ts">
import {links} from "@/_mock/NavLink"
import {onBeforeUnmount, onMounted, ref} from "vue";

let showNavbar  = ref(true);
let lasScrollPosition = ref(0);

function manageNav () {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  showNavbar.value = currentScrollPosition < lasScrollPosition.value
  lasScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', manageNav)
});

onBeforeUnmount(() => {})
window.removeEventListener('scroll', manageNav)

</script>

<template>
  <nav>
    <div class="mobile-nav relative flex md:flex-col md:hidden pb-6 text-lg overflow-x-hidden">
      <div  class="flex justify-between w-full">
        <div ><img class="h-10" src="@/assets/images/icons/a-logo-w.png" alt="abayomi-aluko"></div>
      </div>
      <div v-show="!showNavbar" class="fixed bottom-0 z-20 right-0 left-0 bg-zinc-900  duration-500 sm:w-screen w-full h-14 drop-shadow-xl">
        <div  class=" flex justify-center text-xs text-white text-center">
          <RouterLink
              :class="link.active ? 'font-semibold my-5 text-white mx-4': 'mx-4 my-5 hover:text-white'" v-for="link in links" :key="link.name" to="/">{{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
