import { Suspense } from 'react'
import { books } from '@/data/books'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
    return books
        .filter((b) => !b.href)
        .map((b) => ({ slug: b.slug }))
}

async function CaseStudy({ params }: {params: Promise<{ slug: string}>}) {
    const { slug } = await params
    const book = books.find((b) => b.slug === slug)
    if (!book) notFound()

    const cs = book.caseStudy

    return (
        <article>
            <Link href="/">Go Back</Link>
            <h1>{book.title}</h1>
            {cs ? (
                <>
                    <p>{cs.role}{cs.client ? ` • ${cs.client}`:""}</p>
                    <p>{cs.summary}</p>
                    <ul>
                        {cs.stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                    <ul>
                        {cs.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    {cs.url ? (
                        <a href={cs.url} target='_blank' rel='noreferrer'>Visit live site</a>
                    ) : null}
                </>
            ): null}
        </article>
    )
}

export default function Page({ params }: {params: Promise<{ slug: string}>}) {
    return (
        <Suspense fallback={null}>
            <CaseStudy params={params} />
        </Suspense>
    )
}