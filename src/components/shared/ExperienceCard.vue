<script setup lang="ts">
import ProjectStacks from "@/components/shared/ProjectStacks.vue";

const props = defineProps({
  jobs: {type: Object, required: true}
})
</script>

<template>
  <div class="">
    <ul>
      <li class="timeline relative pb-6">
        <div class="dot -left-6 top-1.5"></div>
        <div class="mx-3 px-3 py-1 rounded">
         <a class="text-[16px] w-screen py-2 hover:text-zinc-600 font-semibold" :href="'https://www.' + props.jobs.url " target="_blank">{{ props.jobs.company }}</a>
          <p class="text-[13px] text-zinc-300 pt-2">{{ props.jobs.position }}</p>
          <ul class="pt-2">
            <li class="list-item text-zinc-400">
             {{ props.jobs.description }}
            </li>
              <ProjectStacks :stacks="props.jobs.stacks"/>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>

</style>
