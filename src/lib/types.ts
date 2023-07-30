export const LinkVals = {
    aboutMe: "About Me",
    aboutSite: "About Site",
    aboutProjects: "About Projects",
    contact: "Contact Me",
} as const

export interface HeaderProps {
    children: string
    className?: string
    id?: string
}


type ValueOf<T> = T[keyof T]
export type LinkType = ValueOf<typeof LinkVals>