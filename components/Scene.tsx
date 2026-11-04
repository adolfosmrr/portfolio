'use client'

import Book from './Book'

import { Canvas } from '@react-three/fiber'

import { books } from '@/data/books'


export default function Scene() {
    return (
        <>
            <Canvas camera={{position: [0, 0, 2], fov: 120 }}>
                {
                    books.map((book, i) => {
                        const x = (i - (books.length - 1) / 2) * 0.6
                        return (
                            <Book key={book.slug} position={[x, 0, 0]} book={book}/>
                        )
                    })
                }
            </Canvas>
        </>
    )
}