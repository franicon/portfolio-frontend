<script setup lang="ts">
import { features } from "@/_mock/Feature";
import { stakcsData } from "@/_mock/Stack";
import { experience } from "@/_mock/Experience";

import StackCard  from "@/components/shared/StackCard.vue";
import  ExperienceCard from "@/components/shared/ExperienceCard.vue";
</script>

<template>
  <section class="pt-52 relative w-full">
    <div class="md:text-5xl text-start text-4xl bg-gradient-to-r from-purple-200 via-zinc-50 to-cyan-100 inline-block text-transparent bg-clip-text font-bold">
      About Me
    </div>
    <div class="flex flex-col xl:flex-row justify-between relative">
      <div class="max-w-md leading-relaxed text-zinc-400 text-md pt-4">
        <p class="font-normal text-[13px]">I have fun building web applications and more so making the experience dynamic. let's take a short tour! </p>
      </div>
      <div class="text-white relative w-full xl:max-w-2xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg xl:mx-0 md:mx-auto sm:mx-auto">
        <div class="stack-wrapper">
          <StackCard :render="stakcsData"/>
        </div>
    </div>
    </div>
    <div class="relative flex md:flex-row justify-between flex-col gap-8 text-white xl:mt-0 md:mt-56 sm:mt-28 mt-52 pt-36 bg-transparent bg-opacity-30 w-full">
      <div class="md:rounded-2xl w-full text-[13px] font-light text-zinc-300">
        <div class="w-full space-y-2 mt-4 md:px-20  xl:px-0 lg:px-0 xl:mt-20">
          <div class="border-l border-gray-600 xl:border-0 lg:border-0">
            <div class="relative">
              <div>
                <div class="grid xl:grid-cols-3 lg:grid-cols-2 ml-5 md:gap-6 gap-5 items-start">
                  <div class="">
                    <h2 class="md:text-xl text-lg font-semibold">My Practices</h2>
                    <p class="max-w-sm pt-2 ">Here are the techniques/approach i take into consideration when build or working on a project.</p>
                  </div>
                  <div v-for="feature in features" :key="feature.title" class="feat-card">
                    <div class="">
                      <div class="dot -left-7 pt-5 xl:hidden lg:hidden"></div>
                      <div class="md:text-[16px] text-[15px] font-semibold xl:pb-0 lg:pb-0 pb-4"> {{feature.title}} </div>
                      <p class="font-normal text-zinc-400 p-text">
                        {{feature.description}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="max-w-3xl mx-auto rounded-xl bg-zinc-700 bg-opacity-10 backdrop-blur-lg mt-11 xl:p-10 p-4 relative overflow-hidden">
            <h3 class="md:text-xl text-lg font-semibold mb-3 ">Experience</h3>
            <p class="xl:text-md text-[14px] font-normal text-zinc-300 xl:max-w-xl max-w-full p-text">
              Fast-forward to today I have had the opportunities to work remotely with diverse Company | Brand of different fields:
            </p>
            <div class="mt-6">
              <template v-for="job in experience" :key="job.company">
                <ExperienceCard :jobs="job"/>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
