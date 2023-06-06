<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useModalStore} from '@/stores/modal';
import { useProjectStore } from "@/stores/project";
import ProjectStacks from "@/components/shared/ProjectStacks.vue";


const modal = useModalStore();
const {toggleModal} = modal;
const {isOpen} = storeToRefs(modal);

const  project = useProjectStore();
const { data } = storeToRefs(project);

</script>

<template>
  <section class="w-screen fixed h-screen z-50 backdrop-blur ease-in-out transition-all" v-show="isOpen">
    <div class="flex justify-center flex-col h-screen relative overflow-hidden px-3">
<!--      border top-->
      <div class=" top-0 xl:w-2/6 lg:w-3/6 md:w-4/6 w-full border-b-gray-500 px-8 border-b rounded-t-md mx-auto left-0 right-0 py-2 bg-zinc-900 shadow-y-2xl shadow-white">
        <div class="text-xs font-light flex justify-between items-center">
          <div class=" cursor-pointer text-zinc-300" @click="toggleModal">Back ot projects</div>
          <div class="bg-zinc-700 text-white px-2 py-1 rounded cursor-pointer hover:bg-zinc-800 duration-300" @keydown.esc="toggleModal">
            Close
          </div>
        </div>
      </div>
<!--      modal contents-->
      <div class="xl:w-2/6 lg:w-3/6 md:w-4/6 sm:3/6 xl:h-[85vh] h-[85vh] mx-auto  text-white  px-4 relative overflow-hidden overflow-y-auto bg-gradient-to-tr from-zinc-900 via-zinc-900 to-cyan-950">
        <div class="px-4 py-4">
          <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
              <source src="@/assets/images/cheetah.mp4" type="video/mp4">
            </video>
          </div>
          <div class="py-2">
            <div class="space-y-5">
              <div class="flex justify-between items-center">
                <div class="">
                  <h1 class="text-2xl font-bold pt-4 items-center">{{data.title}}</h1>
                </div>
                <div class="bg-zinc-800 hover:bg-zinc-700 text-xs px-5 py-2 rounded cursor-pointer">View Site</div>
              </div>
              <div class="">
                <h3 class="text-white text-1xl font-semibold">About</h3>
                <p class="text-[14px] font-normal text-zinc-400">{{data.about}}</p>
              </div>
              <div class="space-y-2">
                <h3 class="text-white text-1xl font-semibold">Technologies</h3>
                <ProjectStacks  :style="'bg-zinc-800 px-3 py-2 font-bold text-zinc-200 rounded'" :stacks="data.stacks"/>
              </div>
              <div class="space-y-2 pt-2">
                <h3 class="text-white text-1xl font-semibold">Features</h3>
                <div class="flex flex-col text-[13px]  gap-2 flex-wrap text-zinc-400">
                  <ul class="space-y-1 px-5">
                    <li class="list-decimal">Api Integration development with Laravel</li>
                    <li class="list-decimal">Full email support for contact and pricing</li>
                    <li class="list-decimal">UI design and development of frontend</li>
                    <li class="list-decimal">Authetication with Laravel Sanctum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      border bottom-->
      <div class="top-0 xl:w-2/6 lg:w-3/6 md:w-4/6 w-full border-t-gray-500 border-t rounded-b-md mx-auto left-0 right-0 py-5
                  bg-zinc-900 shadow-y-2xl shadow-white">
        <div class=""></div>
      </div>
    </div>
  </section>
</template>
