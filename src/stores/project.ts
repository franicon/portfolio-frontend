import { defineStore } from "pinia";

interface ProjectType {
    link: string
    img: string,
    slug: string,
    title: string,
    about: string,
    video?: string,
    stacks: string[],
    features: string[],
}

export const useProjectStore = defineStore('project', {
    state: (): { data: ProjectType } => ({
        data: {} as ProjectType
    })
})
