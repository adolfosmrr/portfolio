import { Float, Text, useTexture } from "@react-three/drei"

import type { Book as BookData } from "@/data/books"

type BookProps = {
    position: [number, number, number]
    book: BookData
}

export default function Book({ position, book }: BookProps ){

    const texture = useTexture(book.screen)

    return (
        <Float speed={0}>
            <mesh position={position}>
                <boxGeometry args={[0.3, 2, 1.4]} />
                <meshNormalMaterial />
                <Text fontSize={0.15} color="white" position={[0, 0, 0.71]} rotation={[0, 0, Math.PI / 2]}>
                    {book.title}
                </Text>
                <mesh rotation={[0, -Math.PI / 2, 0]} position={[-0.16, 0, 0]}>
                    <planeGeometry args={[1.2, 1.8]}/>
                    <meshBasicMaterial map={texture} toneMapped={false} />
                </mesh>
            </mesh>
        </Float>
    )
} 