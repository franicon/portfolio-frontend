<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";

let url = ref([
  {
    name: 'About',
    route: '/about',
    active: false
  },
  {
    name: 'Projects',
    route: '/about',
    active: false
  },
  {
    name: 'Contact',
    route: '/about',
    active: false
  },
  {
    name: 'Resume',
    route: '/about',
    active: false
  }
]);
let open = ref(false);

interface Link {
  active: boolean
}

function toggleActive(link: Link) {
  url.value.forEach((item) => {
    item["active"] = false
  });
  return link.active = true
}

function toggleMenu() {
  open.value = !open.value
  console.log('toggle')
}

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
    <div class=" flex md:flex-row hidden md:flex pb-6 text-sm">
      <div><img class="h-10" src="@/assets/images/icons/a-logo-w.png" alt="abayomi-aluko"></div>
      <div class="sm:flex-grow">
        <div class=" mx-auto bg-transparent rounded text-white w-96 p-3 drop-shadow-lg border border-gray-400 text-center ">
          <RouterLink
              :class="link.active ? 'font-semibold px-3': 'px-3 hover:text-zinc-200'"
              @click="toggleActive(link)" v-for="link in url" :key="link.name" to="/">{{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <!--  Nav Mobile-->
  <nav>
    <div class="mobile-nav relative flex md:flex-col md:hidden  pb-6 text-lg transition-all duration-500 overflow-x-hidden">
      <div  class="flex justify-between w-full">
        <div ><img class="h-10" src="@/assets/images/icons/a-logo-w.png" alt="abayomi-aluko"></div>
      </div>
      <div v-show="!showNavbar" class="fixed bottom-0 z-50 right-0 left-0 bg-zinc-900 bg-opacity-90 rounded-t-2xl border-gray-400 border-t transition-all duration-500 sm:w-96 w-full h-14 drop-shadow-xl">

        <div  class=" flex justify-center text-xs text-white text-center">
          <RouterLink
              :class="link.active ? 'font-semibold my-5 text-white mx-4': 'mx-4 my-5 hover:text-white'"
              @click="toggleActive(link)" v-for="link in url" :key="link.name" to="/">{{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
