<script setup lang="ts">
import {ref} from "vue";

let url = ref<Object[]>([
  {
    name: 'About',
    route: '/about',
    is_active: false
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

function toggleActive(link): void {
  url.value.forEach((item) => {
    item["is_active"] = false
  });
  link.active = true
}

function toggleMenu() {
  open.value = !open.value
  console.log('toggle')
}

</script>
<template>
  <nav>
    <div class=" flex md:flex-row hidden md:flex pb-6 text-sm">
      <div><img class="h-14" src="@/assets/images/icons/a-logo-b.png" alt="abayomi-aluko"></div>
      <div class="sm:flex-grow">
        <div class=" mx-auto rounded-full bg-zinc-800 text-white w-96 p-3 drop-shadow-lg border border-gray-400 text-center ">
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
    <div class="flex md:flex-col md:hidden  pb-6 text-lg transition-all">
      <div v-show="!open" class="flex justify-between w-full">
        <div ><img class="h-10" src="@/assets/images/icons/a-logo-b.png" alt="abayomi-aluko"></div>
        <div class="cursor-pointer text-white" @click="toggleMenu">Open</div>
      </div>
      <div v-show="open"
           class="absolute right-0 top-0 bg-zinc-800 transition-all pl-5 sm:w-96 w-full h-screen drop-shadow-xl">
        <div class="flex justify-between mt-8 pr-6">
          <div><img class="h-10" src="@/assets/images/icons/a-logo-b.png" alt="abayomi-aluko"></div>
          <div class="cursor-pointer text-white" @click="toggleMenu">Close</div>
        </div>
        <div class="flex flex-col mt-32  text-white">
          <RouterLink
              :class="link.active ? 'font-semibold my-5 text-white': ' my-5 hover:text-white'"
              @click="toggleActive(link); toggleMenu()" v-for="link in url" :key="link.name" to="/">{{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
