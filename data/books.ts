export type CaseStudy = {
    role: string
    client?: string
    stack: string[]
    summary: string
    highlights: string[]
    url?: string
}

export type Book = {
    slug: string
    title: string
    screen: string
    href?: string
    type?: "client" | "personal"
    caseStudy?: CaseStudy
}

export const books: Book[] = [
    {
        slug: "nikers",
        title: "Nikers",
        screen: "/screens/nikers.avif",
        type: "personal",
        caseStudy: {
            role: "Frontend Developer",
            stack: ["Next.js", "TypeScript", "Tailwind", "Shopify", "GSAP", "Vercel"],
            summary: "A personal storefront experiment. I started from Vercel’s Shop template to practice a headless Shopify store with Next.js: Shopify owns the catalog, cart and checkout, and the storefront is a Next.js app where I added custom motion with GSAP.",
            highlights: [
                "Connected a Shopify catalog to a Next.js App Router storefront.",
                "Customized the storefront and built a GSAP hero with product transitions.",
                "Used this project to practice React, TypeScript and Next.js — a stack I study daily, not one I have shipped yet for clients."
            ]
        }
    },
    {
        slug: "flor-de-cana-us",
        title: "Flor de Caña US",
        screen: "/screens/flor-de-cana-us.avif",
        type: "client",
        caseStudy: {
            role: "Frontend Developer",
            client: "Flor de Caña",
            stack: ["Shopify", "Liquid", "JavaScript", "GSAP", "Swiper"],
            summary: "The official U.S. store for Flor de Caña, a Nicaraguan rum brand. I build and maintain custom Shopify templates so visitors can browse aged rums, bundles and collections, and buy online.",
            highlights: [
                "Built custom product, bundle and collection pages in Liquid.",
                "Worked on the cart, navigation and mega-menu.",
                "Added GSAP animations and Swiper carousels, keeping the store fully responsive."
            ],
            url: "https://us.flordecana.com"
        }
    },
    {
        slug: "flor-de-cana-experiencia",
        title: "Flor de Caña Experiencia",
        screen: "/screens/flor-de-cana-experiencia.avif",
        type: "client",
        caseStudy: {
            role: "Frontend Developer",
            client: "Flor de Caña",
            stack: ["Shopify", "Liquid", "JavaScript", "GSAP", "Swiper"],
            summary: "A Shopify store for booking distillery tours and brand experiences — tastings, workshops and merch — so visitors can discover the rum’s story beyond the bottle.",
            highlights: [
                "Built custom product and collection pages for tours, tastings and merchandise.",
                "Created an experiences grid to browse and compare tours.",
                "Implemented a booking flow with date and party-size selection."
            ],
            url: "https://flordecanaexperiencia.com"
        }
    },
    {
        slug: "torremont",
        title: "TorreMont",
        screen: "/screens/torremont.avif",
        type: "client",
        caseStudy: {
            role: "Designer & Developer",
            client: "TorreMont",
            stack: ["Webflow", "JavaScript", "GSAP", "SEO"],
            summary: "Landing-page redesign for an Argentine company that designs, fabricates and installs towers and masts for telecommunications. The site presents services, accessories, clients and a contact form.",
            highlights: [
                "Redesigned the landing to strengthen brand identity, readability and visual hierarchy.",
                "Built it in Webflow with custom JavaScript and GSAP animations.",
                "Set up Google Search Console and technical SEO."
            ],
            url: "https://www.torremont.com.ar"
        }
    },
    {
        slug: "servicios-mgw",
        title: "Servicios MGW",
        screen: "/screens/serviciosMGW.avif",
        type: "client",
        caseStudy: {
            role: "Designer & Developer",
            client: "Servicios MGW",
            stack: ["Webflow", "JavaScript", "GSAP", "Google Analytics"],
            summary: "Full website for an internet provider in Monte Grande, offering fiber and wireless plans, hardware and a contact flow to check coverage.",
            highlights: [
                "Designed the site in Figma and built it in Webflow, from mockup to production.",
                "Merged several forms into one dynamic form with smart service selection.",
                "Added GSAP interactions and integrated Google Analytics."
            ],
            url: "https://www.serviciosmontegrande.com"
        }
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