import { useRef, useEffect } from "react"
import Book from "./Book"

import { books } from '@/data/books'
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"

export default function BookRow() {

    const groupRef = useRef<THREE.Group>(null)

    const scrollTarget = useRef(0)
    const current = useRef(0)

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            scrollTarget.current += e.deltaY * 0.002
        }

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                scrollTarget.current += 0.6
            }
            if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                scrollTarget.current -= 0.6
            }
        }
        
        window.addEventListener('wheel', onWheel)
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    useFrame(() => {
        if (!groupRef.current) return

        current.current = THREE.MathUtils.lerp(current.current, scrollTarget.current, 0.1)

        const total = rowBooks.length * 0.6 //14.4

        groupRef.current.children.forEach((child, i) => {
            let x = (i * 0.6 + current.current) % total 
            if (x < 0) x += total
            child.position.x = x - total / 2
        })
    })

    const rowBooks = [...books, ...books, ...books]

    return (
        <group ref={groupRef}>
            {rowBooks.map((book, i) => (
                <Book key={`${book.slug}-${i}`} position={[0, 0, 0]} book={book} />
            ))}
        </group>
    )
}