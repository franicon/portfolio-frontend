import type {stackType} from "@/types";

import ts from "@/assets/images/icons/ts.svg";
import js from "@/assets/images/icons/js.png";
import vue from "@/assets/images/icons/vue.svg";
import nuxt from "@/assets/images/icons/nuxt.svg"
import node from "@/assets/images/icons/node.svg";
import nest from "@/assets/images/icons/nest.svg";
import laravel from "@/assets/images/icons/laravel.svg";
import express from "@/assets/images/icons/express.svg";

const stakcsData: stackType[] = [
    {
        url: ts,
        alt: 'typeScript'
    },
    {
        url: js,
        alt: 'javaScript'
    },
    {
        url: node,
        alt: 'nodeJS'
    },
    {
        url: express,
        alt: 'expressJS'
    },
    {
        url: nest,
        alt: 'nestJS'
    },
    {
        url: laravel,
        alt: 'laravel'
    },
    {
        url: vue,
        alt: 'vueJS'
    },
    {
        url: nuxt,
        alt: 'nuxtJS'
    }
]

export {stakcsData}
