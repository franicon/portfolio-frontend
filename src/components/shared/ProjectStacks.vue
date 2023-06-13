<script setup lang="ts">
 const props = defineProps<{stacks: string[], style: string}>()
</script>

<template>
  <div class="space-y-2 mt-4">
    <div class="flex text-[10px] gap-2 flex-wrap text-zinc-200">
      <div :class="props.style" v-for="(stack, index) in props.stacks" :key="index">{{stack}}</div>
    </div>
  </div>
</template>
