<script setup lang="ts">
import AboutComp from "@/components/section/AboutComp.vue"
import Navigation from "@/components/layout/Navigation.vue"
import ModalPopup from "@/components/section/ModalPopup.vue"
import BannerComp from "@/components/section/BannerComp.vue";
import ProjectsComp from "@/components/section/ProjectsComp.vue"

import {storeToRefs} from "pinia";

import { useProjectStore } from "@/stores/project";
const  project = useProjectStore()
const { data } = storeToRefs(project)
</script>

<template>
  <ModalPopup :data="data"/>
  <div class="bg-gradient-to-tr from-zinc-900 via-zinc-950 to-cyan-950 overflow-x-hidden">
    <div class="bg-[url('@/assets/images/download.svg')] duration-500 ">
      <div class="sm:max-w-screen-2xl mx-auto py-8 xl:container xl:max-w-screen-xl lg:max-w-6xl xl:px-5 sm:px-8 px-4 transition-all duration-500">
        <Navigation/>
        <BannerComp/>
        <AboutComp/>
        <ProjectsComp/>
      </div>
    </div>
  </div>
</template>
