export type Book = {
    slug: string
    title: string
    screen: string
    href?: string
    type?: "client" | "personal"
}

export const books: Book[] = [
    {
        slug: "nikers",
        title: "Nikers",
        screen: "/screens/nikers.avif",
        type: "personal"
    },
    {
        slug: "flor-de-cana-us",
        title: "Flor de Caña US",
        screen: "/screens/flor-de-cana-us.avif",
        type: "client"
    },
    {
        slug: "flor-de-cana-experiencia",
        title: "Flor de Caña Experiencia",
        screen: "/screens/flor-de-cana-experiencia.avif",
        type: "client"
    },
    {
        slug: "torremont",
        title: "TorreMont",
        screen: "/screens/torremont.avif",
        type: "client"
    },
    {
        slug: "servicios-mgw",
        title: "Servicios MGW",
        screen: "/screens/serviciosMGW.avif",
        type: "client"
    },
    {
        slug: "skills",
        title: "Skills",
        screen: "/screens/skills.avif",
        href: "/skills"
    },
    {
        slug: "about-me",
        title: "About Me",
        screen: "/screens/about-me.avif",
        href: "/about-me"
    },
    {
        slug: "my-hobbies",
        title: "My Hobbies",
        screen: "/screens/hobbies.avif",
        href: "/my-hobbies"
    },
]