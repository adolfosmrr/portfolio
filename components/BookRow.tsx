import { useRef, useEffect } from "react"
import Book from "./Book"

import { books } from '@/data/books'
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"

export default function BookRow() {

    const groupRef = useRef<THREE.Group>(null)

    const scrollTarget = useRef(0)

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            scrollTarget.current += e.deltaY * 0.002
        }
        window.addEventListener('wheel', onWheel)
        return () => window.removeEventListener('wheel', onWheel)
    }, [])  

    useFrame(() => {
        if (!groupRef.current) return
        groupRef.current.position.x = THREE.MathUtils.lerp(
            groupRef.current.position.x, scrollTarget.current, 0.1
        )
    })

    return (
        <group ref={groupRef}>
            {
                books.map((book, i) => {
                    const x = (i - (books.length - 1) / 2) * 0.6
                    return (
                        <Book key={book.slug} position={[x, 0, 0]} book={book} />
                    )
                })
            }
        </group>
    )
}