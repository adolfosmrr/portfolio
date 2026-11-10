import { useRef, useEffect } from "react"
import Book from "./Book"

import { books } from '@/data/books'
import * as THREE from 'three'
import { useFrame, useThree } from "@react-three/fiber"

export default function BookRow() {

    const groupRef = useRef<THREE.Group>(null)

    const scrollTarget = useRef(0)
    const current = useRef(0)
    const lastTouchX = useRef<number | null>(null)
    const { viewport } = useThree()

    const scale = Math.min(1, viewport.width / 2.5)

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

        const onTouchStart = (e: TouchEvent) => {
            lastTouchX.current = e.touches[0].clientX
        }

        const onTouchMove = (e: TouchEvent) => {
            if (lastTouchX.current === null) return
            const x = e.touches[0].clientX
            const delta = lastTouchX.current - x
            scrollTarget.current -= delta * 0.01
            lastTouchX.current = x
        }

        const onTouchEnd = () => {
            lastTouchX.current = null
        }
        
        window.addEventListener('wheel', onWheel)
        window.addEventListener('keydown', onKeyDown)
        window.addEventListener('touchstart', onTouchStart, { passive: true})
        window.addEventListener('touchmove', onTouchMove, { passive: true})
        window.addEventListener('touchend', onTouchEnd)
        return () => {
            window.removeEventListener('wheel', onWheel)
            window.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('touchstart', onTouchStart)
            window.removeEventListener('touchmove', onTouchMove)
            window.removeEventListener('touchend', onTouchEnd)
        }
    }, [])

    useFrame(() => {
        if (!groupRef.current) return

        current.current = THREE.MathUtils.lerp(current.current, scrollTarget.current, 0.1)

        const total = rowBooks.length * 0.6

        groupRef.current.children.forEach((child, i) => {
            let x = (i * 0.6 + current.current) % total 
            if (x < 0) x += total
            child.position.x = x - total / 2
        })
    })

    const rowBooks = [...books, ...books, ...books]

    return (
        <group ref={groupRef} scale={scale}>
            {rowBooks.map((book, i) => (
                <Book key={`${book.slug}-${i}`} position={[0, 0, 0]} book={book} />
            ))}
        </group>
    )
}