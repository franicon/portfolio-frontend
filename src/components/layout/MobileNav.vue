<script setup lang="ts">
import {links} from "@/_mock/NavLink"
import {onBeforeUnmount, onMounted, ref} from "vue";

interface Link {
  active: boolean
}

const routeLinks = ref(links)

function toggleActive(link: Link) {
  routeLinks.value.forEach((item) => {
    item["active"] = false
  });
  return link.active = true
}

function top() {
  routeLinks.value.forEach((item) => {
    item["active"] = false
  });

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

let showNavbar  = ref(true);
let lasScrollPosition = ref(0);

function manageNav () {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  showNavbar.value = currentScrollPosition >= lasScrollPosition.value
  lasScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  showNavbar.value = false
  window.addEventListener('scroll', manageNav)
});

onBeforeUnmount(() => {})
window.removeEventListener('scroll', manageNav)

</script>
<template>
  <nav>
    <div class="mobile-nav relative flex md:flex-col md:hidden pb-6 text-lg overflow-x-hidden ">
      <div v-show="!showNavbar" class="fixed bottom-0 z-20 right-0 left-0 bg-zinc-900 duration-500 sm:w-screen w-full py-4 drop-shadow-xl">
        <div  class=" flex items-center justify-evenly text-xs text-white text-center">
          <div @click="top">
            <router-link to="/"><img class="h-7" src="@/assets/images/icons/a-logo-w.png" alt="abayomi-aluko"></router-link>
          </div>
          <div class="">
            <RouterLink
                :class="link.active ? 'font-semibold my-5 text-white mx-4': 'mx-4 my-5 hover:text-white'"  @click="toggleActive(link)" v-for="link in routeLinks" :key="link.name" :to="link.route">{{ link.name }}
            </RouterLink>
          </div>
          <div class="cursor-pointer px-4 hover:text-zinc-200"><a href="/abayomi-francis-aluko-resume.pdf" target="_blank">Resume</a></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
