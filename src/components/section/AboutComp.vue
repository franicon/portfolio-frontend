<script setup lang="ts">
import { stakcsData } from "@/_mock/Stack"
import StackCard  from "@/components/shared/StackCard.vue"
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
      <div class="cursor-pointer md:rounded-2xl w-full text-[13px] font-light text-zinc-300">
        <div class="w-full space-y-2 mt-4">
          <div class="border-l border-gray-600 ">
            <div class="relative">
              <div class="">
                <div class="grid xl:grid-cols-3 lg:grid-cols-2 ml-5 md:gap-6 gap-5">
                  <div class="">
                    <div class="absolute h-4 w-4 bg-zinc-900 border-2  rounded-full -left-2"></div>
                    <div class="text-[16px] font-semibold flex gap-4 items-center pb-3">
                      Architecture
                    </div>
                    <p class="font-normal text-zinc-400 md:text-[13px] text-[12px]">
                      A software architecture ultimately lead to robust & scalable software solutions.
                      I get with dev process by using visual representations to structure & organize
                      the required features, modules needed to ensure efficient operation and maintainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
