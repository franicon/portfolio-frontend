<script setup lang="ts">
import { stakcsData } from "@/_mock/Stack"
defineProps<{render: typeof stakcsData}>()

</script>

<template>
  <section>
    <div class="bg-stack rounded-xl md:p-8 p-4 border border-zinc-800 space-y-6">
      <div class="xl:max-w-xl lg:max-w-sm md:max-w-xs lg:pr-10 md:pr-5 mb-2">
        <div class="md:text-2xl lg:text-2xl xl:text-2xl  text-lg font-semibold">Technologies</div>
        <div class="text-[13px] xl:text-[14px]  font-light mt-1 text-gray-300">Here are few frameworks & library i have been working with lately.</div>
      </div>
      <div>
        <div class="stack-grid items-center gap-2">
          <template v-for="stack in render" :key="stack.alt" >
            <div class="bg-zinc-800 border border-zinc-700 rounded lg:p-2 xl:p-3 md:p-2 sm:p-2 sm:p-2 p-2 mx-auto">
              <img class="md:w-7 lg:w-7 xl:w-8 sm:w-7 w-9" :src="stack.url" :alt="stack.alt">
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
