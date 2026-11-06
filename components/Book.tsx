import { useState, useRef, useMemo, useEffect } from "react"
import * as THREE from 'three'
import { Float, Text, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRouter } from "next/navigation"

import type { Book as BookData } from "@/data/books"

type BookProps = {
    position: [number, number, number]
    book: BookData
}

export default function Book({ position, book }: BookProps ){

    const [hovered, setHovered] = useState(false)

    const router = useRouter()

    const screenRef = useRef<THREE.MeshBasicMaterial>(null)
    const planeRef = useRef<THREE.Mesh>(null)
    const bookRef = useRef<THREE.Mesh>(null)

    useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto"
    }, [hovered])

    const texture = useTexture(book.screen)
    const planeAspect = 1.2 / 1.8
    const img = texture.image as HTMLImageElement
    const imageAspect = img.width / img.height

    if (imageAspect > planeAspect) {
        texture.repeat.x = planeAspect / imageAspect
        texture.offset.x = (1 - texture.repeat.x) / 2
        } else {
        texture.repeat.y = imageAspect / planeAspect
        texture.offset.y = (1 - texture.repeat.y) / 2
    }

    const worldPos = useMemo(() => new THREE.Vector3(), [])

    useFrame((state) => {
        if (!planeRef.current) return
        planeRef.current.getWorldPosition(worldPos)
        const dist = state.camera.position.distanceTo(worldPos)
        const brightness = THREE.MathUtils.mapLinear(dist, 5.8, 9.1, 1, 0.15)
        screenRef.current?.color.setScalar(brightness)
        if (bookRef.current) {
            bookRef.current.position.y = THREE.MathUtils.lerp(
                bookRef.current.position.y, hovered ? 0.3 : 0, 0.1
            )
        }
    })

    return (
        <Float speed={0}>
            <mesh 
                ref={bookRef}
                position={position}
                onPointerOver={(e) => {e.stopPropagation(); setHovered(true)}}
                onPointerOut={() => setHovered(false)}
                onClick={() => {e.stopPropagation(); router.push(book.href ?? `/work/${book.slug}`)}}
            >
                <boxGeometry args={[0.3, 2, 1.4]} />
                <meshPhysicalMaterial transmission={1} roughness={0.3} thickness={0.5} />
                <Text fontSize={0.15} color="white" position={[0, 0, 0.72]} rotation={[0, 0, Math.PI / 2]}>
                    {book.title}
                </Text>
                <mesh ref={planeRef} rotation={[0, -Math.PI / 2, 0]} position={[-0.16, 0, 0]}>
                    <planeGeometry args={[1.2, 1.8]}/>
                    <meshBasicMaterial ref={screenRef} map={texture} toneMapped={false} />
                </mesh>
            </mesh>
        </Float>
    )
} 