<script setup lang="ts">
import {storeToRefs} from "pinia";
import { projects } from "@/_mock/Projects";
import ProjectStacks from "@/components/shared/ProjectStacks.vue";
import {ref} from "vue";

import { useModalStore } from "@/stores/modal";
import { useProjectStore } from "@/stores/project";
import type {projectType} from "@/types";

const store = useModalStore();
const  project = useProjectStore();

const {toggleModal} = store
let { data } = storeToRefs(project)

let projectData = ref(data)

function openModal(details: projectType) {
  projectData.value = details;
  toggleModal()
}


</script>

<template>
  <div class="pt-44">
    <div class=" bg-gradient-to-t px-[0.6px]  via-cyan-300 to-cyan-950 rotate-180  h-28 w-0 flex justify-center  max-w-6xl mx-auto">
      <div class="absolute w-96 top-0 bottom-0 rotate-180 text-center text-white pb-36 text-sm">E X P L O R E MY W O R K S</div>
      <div class="relative">
        <div class="absolute rounded-full w-10 h-10 bg-cyan-400  text-center rotate-180"></div>
        <div class="rounded-full w-10 h-10 bg-cyan-50 animate-ping absolute delay-1000"></div>
        <div class="rounded-full w-10 h-10 bg-cyan-300 animate-ping"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col py-44">
    <div class="md:text-6xl text-start text-4xl bg-gradient-to-r from-purple-200 via-zinc-50 to-cyan-100 inline-block text-transparent bg-clip-text font-bold">Complete Projects</div>
    <div class="mt-24 flex">
      <div class="">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <template v-for="project in projects" :key="project.title">
            <div class="font-light relative group overflow-hidden rounded-xl border border-zinc-800 shadow-2xl shadow-cyan-800/20 cursor-pointer"
                 @click="openModal(project)" >
              <div class=" xl:w-[450px] lg:w-[450px] md:w-[450px] sm:w-screen w-screen bg-cover h-96" :style="{backgroundImage: 'url(' + project.img +')'}"></div>
              <div class="absolute bg-zinc-900 opacity-25 to-cyan-600  h-full left-0 bottom-0 right-0"></div>
              <div
                  class="md:group-hover:opacity-100 bg-gradient-to-b from-transparent to-zinc-950/90 w-full h-full absolute bottom-0 left-0 right-0 duration-500">
                <div class="absolute bottom-8 z-20 mx-4">
                  <div class="text-xl font-bold text-white">{{project.title}}</div>
                  <div class="text-xs text-zinc-100">{{project.slug}}</div>
                  <ProjectStacks  :style="'bg-zinc-200 px-3 py-2 font-bold text-zinc-900 rounded'" :stacks="project.stacks"/>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
<!--    <div class="bg-zinc-800 px-8 py-2 rounded text-white text-sm mx-auto mt-10 cursor-pointer hover:bg-zinc-700">Load-->
<!--      More-->
<!--    </div>-->
  </div>
</template>


<style scoped>

</style>
