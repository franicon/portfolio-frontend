<script setup lang="ts">
import {useModalStore} from "@/stores/modal";

const store = useModalStore();
const {toggleModal} = store

</script>

<template>

  <div class="pt-44">
    <div class=" bg-gradient-to-t px-[0.6px]  via-cyan-300 to-cyan-950 rotate-180  h-28 w-0 flex justify-center  max-w-6xl mx-auto">
      <div class="absolute w-96 top-0 bottom-0 rotate-180 text-center text-white pb-36 text-sm">E X P L O R E MY W O R K
        S
      </div>
      <div class="relative">
        <div class="absolute rounded-full w-10 h-10 bg-cyan-950  text-center rotate-180"></div>
        <div class="absolute rounded-full w-10 h-10 bg-cyan-900 text-center rotate-180"></div>
        <div class="rounded-full w-10 h-10 bg-cyan-50 animate-ping absolute delay-1000"></div>
        <div class="rounded-full w-10 h-10 bg-cyan-300 animate-ping"></div>

      </div>
    </div>
  </div>
  <div class="flex flex-col py-44">
    <div class="md:text-6xl text-start text-4xl bg-gradient-to-r from-purple-200 via-zinc-50 to-cyan-100 inline-block text-transparent bg-clip-text font-bold"> My Complete Projects</div>
    <div class="mt-24 relative flex ">
      <div class="">
        <div class="grid md:grid-cols-3 gap-8">
          <div
              class="font-light relative group overflow-hidden rounded-xl border border-zinc-800 shadow-2xl shadow-cyan-800/20 cursor-pointer"
              @click="toggleModal">
            <div class="bg-[url('@/assets/images/cheetah.png')] w-[450px] bg-cover h-96"></div>
            <div class="absolute bg-zinc-900 opacity-25 to-cyan-600  h-full left-0 bottom-0 right-0"></div>
            <div
                class="md:group-hover:opacity-100 bg-gradient-to-b from-transparent to-zinc-950/90 w-full h-full absolute bottom-0 left-0 right-0 duration-500 md:opacity-0">
              <div class="absolute bottom-8 z-20 mx-4">
                <div class="text-xl font-bold text-white">CheetahMax</div>
                <div class="text-xs text-zinc-100">A logistics website for shipping international products</div>
                <div class="flex text-[10px] mt-4 gap-2 flex-wrap">
                  <div class="bg-white px-3 py-2 rounded-full font-bold ">ReactJS</div>
                  <div class="bg-white px-3 py-2 rounded-full font-bold ">Javascript</div>
                  <div class="bg-white px-3 py-2 rounded-full font-bold ">Bootstrap Css</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-zinc-800 px-8 py-2 rounded text-white text-sm mx-auto mt-10 cursor-pointer hover:bg-zinc-700">Load
      More
    </div>
  </div>
</template>


<style scoped>

</style>
