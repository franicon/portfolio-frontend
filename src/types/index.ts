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

export type { routeType, stackType, featureType, experienceType }
