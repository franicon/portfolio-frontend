<script setup lang="ts">
import {links} from "@/_mock/NavLink";
import MobileNav from "@/components/layout/MobileNav.vue"

interface Link {
  active: boolean
}

function toggleActive(link:Link) {
  links.forEach((item) => {
    item["active"] = false
  });

  return link.active = true
}

</script>
<template>
  <nav>
    <div class=" flex md:flex-row hidden md:flex pb-6 text-sm">
      <div><img class="h-10" src="@/assets/images/icons/a-logo-w.png" alt="abayomi-aluko"></div>
      <div class="sm:flex-grow">
        <div class=" mx-auto bg-transparent rounded text-white w-96 p-3 drop-shadow-lg border border-gray-400 text-center ">
          <RouterLink
              :class="link.active ? 'bg-zinc-900': 'px-3 hover:text-zinc-200'"
              @click="toggleActive(link)" v-for="link in links" :key="link.name" to="/">{{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <!--  Nav Mobile-->
  <MobileNav/>
</template>
