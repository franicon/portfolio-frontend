<script setup lang="ts">
import {features} from "@/_mock/Feature";
import { stakcsData } from "@/_mock/Stack";

import StackCard  from "@/components/shared/StackCard.vue";
import  ExperienceCard from "@/components/shared/ExperienceCard.vue";
</script>

<template>
  <div class="pt-52 relative w-full">
    <div class="md:text-5xl text-start text-4xl bg-gradient-to-r from-purple-200 via-zinc-50 to-cyan-100 inline-block text-transparent bg-clip-text font-bold">
      About Me
    </div>
    <div class="flex flex-col xl:flex-row justify-between relative">
      <div class="max-w-md leading-relaxed text-zinc-400 text-md pt-4">
        <p class="font-normal text-[13px]">I have fun building web applications and more so making the experience dynamic. let's take a short tour! </p>
      </div>
      <div class="text-white relative w-full xl:max-w-2xl">
        <div class="stack-wrapper">
          <StackCard :render="stakcsData" />
        </div>
    </div>
    </div>
    <div class="relative flex md:flex-row justify-between flex-col gap-8 text-white xl:mt-0 md:mt-56 mt-64 pt-36 bg-transparent bg-opacity-30 w-full">
      <div class=" md:rounded-2xl w-full text-[13px] font-light text-zinc-300">
        <div class="w-full space-y-2 mt-4 md:px-20  xl:px-0 lg:px-0 xl:mt-20">
          <div class="border-l border-gray-600 xl:border-0 lg:border-0 ">
            <div class="relative">
              <div>
                <div class="grid xl:grid-cols-3 lg:grid-cols-2 ml-5 md:gap-6 gap-5 items-start" >
                  <div v-for="feature in features" :key="feature.title" class="feat-card">
                    <div class="">
                      <div class="absolute h-4 w-4 bg-zinc-900 border-2 rounded-full -left-7 pt-5 xl:hidden lg:hidden"></div>
                      <div class="text-[16px] font-semibold xl:pb-0 lg:pb-0 pb-4"> {{feature.title}} </div>
                      <p class="font-normal text-zinc-400 md:text-[13px] text-[12px]">
                        {{feature.description}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <ExperienceCard/>
      </div>
    </div>
  </div>

</template>
