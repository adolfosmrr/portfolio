import { Suspense } from 'react'
import { books } from '@/data/books'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
    return books
        .filter((b) => !b.href)
        .map((b) => ({ slug: b.slug }))
}

async function CaseStudy({ params }: {params: Promise<{ slug: string}>}) {
    const { slug } = await params
    const book = books.find((b) => b.slug === slug)
    if (!book) notFound()

    return <h1>{book.title}</h1>
}

export default function Page({ params }: {params: Promise<{ slug: string}>}) {
    return (
        <Suspense fallback={null}>
            <CaseStudy params={params} />
        </Suspense>
    )
}