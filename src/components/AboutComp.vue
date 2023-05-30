<script setup lang="ts">

</script>

<template>
  <div class="pt-52 relative w-full">
    <div class="md:text-5xl text-start text-4xl bg-gradient-to-r from-purple-200 via-zinc-50 to-cyan-100 inline-block text-transparent bg-clip-text font-bold">
      About Me
    </div>
    <div class="flex flex-col xl:flex-row justify-between relative">
      <div class="max-w-md leading-relaxed text-zinc-400 text-md pt-4">
        <p class="font-normal">I have fun building web applications and more so making the experience dynamic. let's take a short tour! </p>
      </div>
      <div class="text-white relative w-full xl:max-w-3xl">
        <div class="z-10 absolute xl:right-16 lg:right-20 md:right-10 sm:right-10 right-5 xl:left-16 lg:left-20 md:left-10 sm:left-10 left-5 xl:top-0 lg:top-28 md:top-32 sm:top-40 top-40">
          <div class="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 rounded-xl md:p-8 p-4 border border-zinc-800 space-y-6 flex justify-between xl:flex-col lg:flex-row md:flex-row sm:flex-col flex-col">
            <div class="xl:max-w-xl lg:max-w-sm md:max-w-xs lg:pr-10 md:pr-5 mb-2">
              <div class="text-2xl font-semibold">Technologies</div>
              <div class="text-[14px] font-light mt-1 text-gray-300">Here are few frameworks & library i have been working with lately.</div>
            </div>
            <div class="">
              <div class="grid xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-5 grid-cols-8 sm:grid-cols-7 grid-cols-4 items-center gap-2">
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-3 md:p-2 sm:p-2 sm:p-2 p-2 m-auto "><img class=" w-7 xl:w-10 " src="@/assets/images/icons/js.png"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-2 md:p-2 sm:p-2 sm:p-2 p-2 m-auto"><img class="w-7 xl:w-9" src="@/assets/images/icons/ts.svg"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-2 md:p-2 sm:p-2 sm:p-2 p-2 mx-auto"><img class="w-7 xl:w-8" src="@/assets/images/icons/node.svg"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-2 md:p-2 sm:p-2 sm:p-2 p-2 m-auto"><img class="w-7" src="@/assets/images/icons/express.svg"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-2 md:p-2 sm:p-2 sm:p-2 p-2 m-auto"><img class="w-7" src="@/assets/images/icons/nest.svg"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-2 md:p-2 sm:p-2 sm:p-2 p-2 m-auto"><img class="w-7 xl:w-8" src="@/assets/images/icons/laravel.svg"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-2 md:p-2 sm:p-2 sm:p-2 p-2 m-auto"><img class="w-7 xl:w-9" src="@/assets/images/icons/vue.svg"></div>
                <div class="bg-zinc-800 border border-zinc-700 rounded  lg:p-2 xl:p-3 md:p-2 sm:p-2 sm:p-2 p-2 m-auto"><img class="w-7 xl:w-10" src="@/assets/images/icons/nuxt.svg"></div>
<!--                <div class="bg-zinc-800 border border-zinc-700 rounded p-4"><img class="w-8" src="@/assets/images/icons/mongodb.svg"></div>-->
<!--                <div class="bg-zinc-800 border border-zinc-700 rounded p-4"><img class="w-8" src="@/assets/images/icons/mysql.svg"></div>-->
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    <div class="relative flex md:flex-row justify-between flex-col gap-8 text-white xl:mt-16 md:mt-56 mt-64 xl:mt-14 pt-36 bg-gradient-to-b from-zinc-950 to-zinc-900/ border-zinc-800 border-t w-full p-10">
      <div class="cursor-pointer md:rounded-2xl w-full text-[13px] font-light text-zinc-300">
        <div class="w-full space-y-2">
          <h3 class="text-2xl font-semibold">Attributes</h3>
          <div class="grid grid-cols-3 pt-5 gap-6">
            <div class="rounded-xl border border-zinc-800 p-8 space-y-5 bg-gradient-to-tl from-zinc-950 via-zinc-900 to-zinc-950 shadow">
              <div class="text-[16px] font-semibold flex gap-4 items-center">
                <div class="bg-zinc-400 p-2 rounded"><img class="w-6" src="@/assets/images/icons/architechture.png" alt="" > </div>
                Architecture
              </div>
              <p class="font-normal text-zinc-400">Every Supabase project comes with a full Postgres database, a free and open source
                database which is considered one of the world's most stable and advanced databases.</p>
            </div>
            <div class="rounded-xl border border-zinc-800 p-8 space-y-5 bg-gradient-to-tl from-zinc-950 via-zinc-950 to-zinc-900 shadow">
              <div class="text-[16px] font-semibold flex gap-4 items-center">
                <div class="bg-zinc-400 p-2 rounded"><img class="w-6" src="@/assets/images/icons/secure-shield.png" alt="" > </div>
                Auth
              </div>
              <p class="font-normal text-zinc-400">Every Supabase project comes with a full Postgres database, a free and open source
                database which is considered one of the world's most stable and advanced databases.</p>
            </div>
            <div class="rounded-xl border border-zinc-800 p-8 space-y-5 bg-gradient-to-tl from-zinc-950 via-zinc-950 to-zinc-900 shadow">
              <div class="text-[16px] font-semibold flex gap-4 items-center">
                <div class="bg-zinc-400 p-2 rounded"><img class="w-6" src="@/assets/images/icons/test.png" alt="" > </div>
                Testing
              </div>
              <p class="font-normal text-zinc-400">Every Supabase project comes with a full Postgres database, a free and open source
                database which is considered one of the world's most stable and advanced databases.</p>
            </div>
            <div class="rounded-xl border border-zinc-800 p-8 space-y-5 bg-gradient-to-tl from-zinc-950 via-zinc-950 to-zinc-900 shadow">
              <div class="text-[16px] font-semibold flex gap-4 items-center">
                <div class="bg-zinc-400 p-2 rounded"><img class="w-6" src="@/assets/images/icons/documented-code.png" alt="" > </div>
                Documented Code
              </div>
              <p class="font-normal text-zinc-400">Every Supabase project comes with a full Postgres database, a free and open source
                database which is considered one of the world's most stable and advanced databases.</p>
            </div>
            <div class="rounded-xl border border-zinc-800 p-8 space-y-5 bg-gradient-to-tl from-zinc-950 via-zinc-950 to-zinc-900 shadow">
              <div class="text-[16px] font-semibold flex gap-4 items-center">
                <div class="bg-zinc-400 p-2 rounded"><img class="w-6" src="@/assets/images/icons/responsive.png" alt="" > </div>
                Responsiveness
              </div>
              <p class="font-normal text-zinc-400">Every Supabase project comes with a full Postgres database, a free and open source
                database which is considered one of the world's most stable and advanced databases.</p>
            </div>
            <div class="rounded-xl border border-zinc-800 p-8 space-y-5 bg-gradient-to-tl from-zinc-950 via-zinc-950 to-zinc-900 shadow">
              <div class="text-[16px] font-semibold flex gap-4 items-center">
                <div class="bg-zinc-400 p-2 rounded"><img class="w-6" src="@/assets/images/icons/dynamic.png" alt="" > </div>
                Dynamics
              </div>
              <p class="font-normal text-zinc-400">Every Supabase project comes with a full Postgres database, a free and open source
                database which is considered one of the world's most stable and advanced databases.</p>
            </div>
          </div>
          <p class="max-w-4xl pt-10 text-md font-normal text-zinc-300">
            Fast-forward to today I have had the opportunities to work remotely at african-market-dubai no.1 African
            grocery to based in Dubai as a product designer, and work on Upwork as a freelance full-stack web developer
            with 5 start rating on all jobs done view-my-upwork-profile, I also took a volunteer role to lead a team of
            front-end developer to build a CRM-SYSTEM for an high school based in Turkey- Paramount -Student. Currently
            I work remotely at Paychant a cryptocurrency On and Off-ramp gateway as a software Engineer.
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
