<script setup lang="ts">
import {links} from "@/_mock/NavLink";
import MobileNav from "@/components/layout/MobileNav.vue"
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
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  showNavbar.value = currentScrollPosition > lasScrollPosition.value
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
  <nav class="relative md:mb-24">
    <div  v-if='!showNavbar' class="fixed bg-zinc-900 bg-opacity-60 backdrop-blur border border-zinc-500 left-0 right-0 top-0 hidden md:flex-row md:flex z-30 p-3 lg:max-w-4xl md:max-w-2xl  my-4 mx-auto  px-6">
      <div  class="flex justify-between items-center w-full">
        <div @click="top">
          <router-link to="/"><img class="h-8" src="@/assets/images/icons/a-logo-w.png" alt="abayomi-aluko"></router-link>
        </div>
        <div class="text-white font-light text-[13px] flex">
          <RouterLink
              :class="link.active ? 'text-zinc-300 px-3' : 'bg-transparent px-3 hover:text-zinc-200'"
              @click="toggleActive(link)" v-for="link in routeLinks" :key="link.name" :to="link.route">{{ link.name }}
          </RouterLink>
          <div class="cursor-pointer px-4 hover:text-zinc-200"><a href="/abayomi-francis-aluko-resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!--  Nav Mobile-->
  <MobileNav/>
</template>

<style scoped>
li:active {
  background-color: #35495E;
}

li.active {
  background-color: #41B883;
}
</style>
