'use client'

import Book from './Book'

import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'

import { books } from '@/data/books'

export default function Scene() {
    return (
        <>
            <Canvas camera={{position: [-5, 2, 4], fov: 40 }}>
                <ambientLight intensity={1} />
                {
                    books.map((book, i) => {
                        const x = (i - (books.length - 1) / 2) * 0.6
                        return (
                            <Book key={book.slug} position={[x, 0, 0]} book={book}/>
                        )
                    })
                }
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <MeshReflectorMaterial mirror={1} resolution={1024} color="#888" blur={[300, 100]} mixBlur={0.8} mixStrength={1.5} roughness={1} />
                </mesh>
            </Canvas>
        </>
    )
}