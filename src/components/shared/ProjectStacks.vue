<script setup lang="ts">

 const props = defineProps<{stacks: string[]}>()
</script>

<template>
  <div class="space-y-2 mt-4">
<!--    <h3 class="text-white text-1xl font-semibold">Technologies</h3>-->
    <div class="flex text-[10px]  gap-2 flex-wrap text-zinc-200" >
      <div class="bg-zinc-800 px-3 py-2  font-bold" v-for="(stack, index) in props.stacks" :key="index">{{stack}}</div>
    </div>
  </div>
</template>
