import{d as c,c as s,e as a,f as e,F as l,i as r,n as h,t as n,g as m,u as p,j as _}from"./index-1a5000bc.js";const g={class:"space-y-2 mt-4"},f={class:"flex text-[10px] gap-2 flex-wrap text-zinc-200"},v=c({__name:"ProjectStacks",props:{stacks:{},style:{}},setup(i){const o=i;return(d,t)=>(s(),a("div",g,[e("div",f,[(s(!0),a(l,null,r(o.stacks,(u,x)=>(s(),a("div",{class:h(o.style),key:x},n(u),3))),128))])]))}}),b=[{title:"Architecture",description:"A software architecture ultimately lead to robust & scalable software solutions. I started get with dev process by using visual representations to structure & organize the required features, modules needed to ensure efficient operation and maintainability."},{title:"Auth",description:"By implementing proper authentication mechanisms, I can enhance the security of the applications and protect sensitive data from unauthorized access. As the rate of hacker increase I follow the best practice implementing secure process for transmitting and verifying auth data."},{title:"Testing",description:"Testing is crucial for identifying defects, errors, and bug in software development, and it helps in improving the overall quality and reliability of the system. I implement the required test needed to ensured issues are identified and resolved"},{title:"Documented Code",description:"Documenting code is an essential practice in software development. It improves code comprehension, fosters collaboration, and streamlines the maintenance and evolution of software projects. I use both comments, and separate documentation files which helps improve the understandability, maintainability, and collaboration among other developers."},{title:"Responsiveness",description:"A responsive system provides a smooth and seamless user experience, regardless of the device, screen size, or network conditions. It ensures that software systems and applications are quick, adaptable, and provide smooth interactions, ultimately leading to increased user satisfaction and engagement."}],w="/assets/ts-ec953d09.svg",y="/assets/js-30558d7e.png",k="/assets/vue-b8314681.svg",z="/assets/nuxt-762d4e61.svg",j="/assets/node-9717fb4b.svg",S="/assets/nest-3e61ac5f.svg",$="/assets/laravel-f4e8b009.svg",A="/assets/express-44e8ea18.svg",I=[{url:w,alt:"typeScript"},{url:y,alt:"javaScript"},{url:j,alt:"nodeJS"},{url:A,alt:"expressJS"},{url:S,alt:"nestJS"},{url:$,alt:"laravel"},{url:k,alt:"vueJS"},{url:z,alt:"nuxtJS"}],P=[{url:"paychant.com",company:"Paychant",stacks:["NestJS","Laravel","VueJS","Jest","Docker","Axios","CoinGeckoAPI"],position:"Mid Software Engineer",description:"Develop Api production code for issues assigned to me for the widget and company admin dashboard including writing E2E test for each futures developed, implementing authentications/authorization where needed and integrate the API into the frontend."},{url:"paramountstudents.network",company:"Paramount Student",stacks:["VueJS","Pinia","Axios","Google Translator"],position:"Frontend Engineer",description:"Lead a team of six frontend developer to build a CRM system for Paramount Student High school where student can manage and check the status of their applications, also implementing the API provided by the backend team."},{url:"africanmarketdubai.com",company:"AMD Dubai",stacks:["Figma","Photoshop","Illustrator"],position:"Product Designer",description:"Come up with design to be used with in the main e-commerce website and the mobile app, including the social media handles."}],C={class:"bg-stack rounded-xl md:p-8 p-4 border border-zinc-800 space-y-6"},D=e("div",{class:"xl:max-w-xl lg:max-w-sm md:max-w-xs lg:pr-10 md:pr-5 mb-2"},[e("div",{class:"md:text-2xl lg:text-2xl xl:text-2xl text-lg font-semibold"},"Technologies"),e("div",{class:"text-[13px] xl:text-[14px] font-light mt-1 text-gray-300"},"Here are few frameworks & library i have been working with lately.")],-1),J={class:"stack-grid items-center gap-2"},E=["src","alt"],q=c({__name:"StackCard",props:{render:{}},setup(i){return(o,d)=>(s(),a("section",null,[e("div",C,[D,e("div",null,[e("div",J,[(s(!0),a(l,null,r(o.render,t=>(s(),a("div",{key:t.alt,class:"bg-zinc-800 border border-zinc-700 rounded lg:p-2 xl:p-3 md:p-2 sm:p-2 sm:p-2 p-2 mx-auto"},[e("img",{class:"md:w-7 lg:w-7 xl:w-8 sm:w-7 w-9",src:t.url,alt:t.alt},null,8,E)]))),128))])])])]))}}),B={class:""},F={class:"timeline relative pb-6"},M=e("div",{class:"dot -left-6 top-1.5"},null,-1),T={class:"md:mx-3 px-3 py-1 rounded"},V=["href"],H={class:"text-[13px] text-zinc-300 pt-2"},L={class:"pt-2"},N={class:"list-item text-zinc-400 p-text"},G=c({__name:"ExperienceCard",props:{jobs:{type:Object,required:!0}},setup(i){const o=i;return(d,t)=>(s(),a("div",B,[e("ul",null,[e("li",F,[M,e("div",T,[e("a",{class:"md:text-[16px] text-[15px] w-screen py-2 hover:text-zinc-600 font-semibold",href:"https://www."+o.jobs.url,target:"_blank"},n(o.jobs.company),9,V),e("p",H,n(o.jobs.position),1),e("ul",L,[e("li",N,n(o.jobs.description),1),m(v,{style:"bg-zinc-800 px-3 py-2 font-bold",stacks:o.jobs.stacks},null,8,["stacks"])])])])])]))}}),R={class:"pt-52 relative w-full"},O=e("div",{class:"md:text-5xl text-start text-4xl bg-gradient-to-r from-purple-200 via-zinc-50 to-cyan-100 inline-block text-transparent bg-clip-text font-bold"}," About Me ",-1),K={class:"flex flex-col xl:flex-row justify-between relative"},Q=e("div",{class:"max-w-md leading-relaxed text-zinc-400 text-md pt-4"},[e("p",{class:"font-normal text-[13px]"},"I have fun building web applications and more so making the experience dynamic. let's take a short tour! ")],-1),U={class:"text-white relative w-full xl:max-w-2xl lg:max-w-4xl md:max-w-3xl sm:max-w-lg xl:mx-0 md:mx-auto sm:mx-auto"},W={class:"stack-wrapper"},X={class:"relative flex md:flex-row justify-between flex-col gap-8 text-white xl:mt-0 md:mt-56 sm:mt-28 mt-52 pt-36 bg-transparent bg-opacity-30 w-full"},Y={class:"md:rounded-2xl w-full text-[13px] font-light text-zinc-300"},Z={class:"w-full space-y-2 mt-4 md:px-20 xl:px-0 lg:px-0 xl:mt-20"},ee={class:"border-l border-gray-600 xl:border-0 lg:border-0"},te={class:"relative"},se={class:"grid xl:grid-cols-3 lg:grid-cols-2 ml-5 md:gap-6 gap-5 items-start"},oe=e("div",{class:""},[e("h2",{class:"md:text-xl text-lg font-semibold"},"My Practices"),e("p",{class:"max-w-sm pt-2"},"Here are the techniques/approach i take into consideration when build or working on a project.")],-1),ae={class:""},ne=e("div",{class:"dot -left-7 pt-5 xl:hidden lg:hidden"},null,-1),ie={class:"md:text-[16px] text-[15px] font-semibold xl:pb-0 lg:pb-0 pb-4"},le={class:"font-normal text-zinc-400 p-text"},re={class:""},ce={class:"max-w-3xl mx-auto rounded-xl bg-zinc-700 bg-opacity-10 backdrop-blur-lg mt-11 xl:p-10 p-4 relative overflow-hidden"},de=e("h3",{class:"md:text-xl text-lg font-semibold mb-3"},"Experience",-1),pe=e("p",{class:"xl:text-md text-[14px] font-normal text-zinc-300 xl:max-w-xl max-w-full p-text"}," Fast-forward to today I have had the opportunities to work remotely with diverse Company | Brand of different fields: ",-1),me={class:"mt-6"},xe=c({__name:"AboutSection",setup(i){return(o,d)=>(s(),a("section",R,[O,e("div",K,[Q,e("div",U,[e("div",W,[m(q,{render:p(I)},null,8,["render"])])])]),e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[e("div",null,[e("div",se,[oe,(s(!0),a(l,null,r(p(b),t=>(s(),a("div",{key:t.title,class:"feat-card"},[e("div",ae,[ne,e("div",ie,n(t.title),1),e("p",le,n(t.description),1)])]))),128))])])])])]),e("div",re,[e("div",ce,[de,pe,e("div",me,[(s(!0),a(l,null,r(p(P),t=>(s(),_(G,{key:t.company,jobs:t},null,8,["jobs"]))),128))])])])])])]))}});export{v as _,xe as a};
