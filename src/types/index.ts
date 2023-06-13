type routeType = {
    name: string,
    route: string,
    active: boolean
}

type stackType = {
    url: string,
    alt: string
}

type featureType = {
    title: string,
    description: string
}

type experienceType = {
    url: string,
    company: string,
    stacks: string[],
    position:  string,
    description: string,
}

type projectType = {
    link: string
    img: string,
    slug: string,
    title: string,
    about: string,
    video?: string,
    stacks: string[],
    features: string[],
}

export type { routeType, stackType, featureType, projectType, experienceType }
