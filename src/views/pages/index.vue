<script setup lang="ts">
import Navigation from "@/components/layout/Navigation.vue";
import ModalPopup from "@/components/section/ModalPopup.vue";
import AboutSection from "@/components/section/AboutSection.vue";
import BannerSection from "@/components/section/BannerSection.vue";
import FooterSection from "@/components/section/FooterSection.vue";
import ProjectsSection from "@/components/section/ProjectsSection.vue";

import {ref} from "vue";
const d = ref (new Date());
let year = d.value.getFullYear();

</script>

<template>
  <ModalPopup/>
  <div class="bg-gradient-to-tr from-zinc-900 via-zinc-950 to-cyan-950 overflow-x-hidden">
    <div class="bg-[url('@/assets/images/download.svg')] duration-500 ">
      <div class="sm:max-w-screen-2xl mx-auto  xl:container xl:max-w-screen-xl pt-8 lg:max-w-6xl xl:px-5 sm:px-8 px-4 transition-all duration-500">
        <Navigation/>
        <BannerSection/>
        <AboutSection id="about"/>
        <ProjectsSection id="projects"/>
        <FooterSection id="contact"/>
        <footer class="text-center text-white md:text-[13px] text-[12px] font-light mt-16 mb-3">
          Build & Design by Abayomi Aluko &copy; 2022 - {{ year }}
        </footer>
      </div>
    </div>
  </div>
</template>
