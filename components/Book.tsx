import { Float, Text } from "@react-three/drei"

import type { Book as BookData } from "@/data/books"

type BookProps = {
    position: [number, number, number]
    book: BookData
}

export default function Book({ position, book }: BookProps ){
    return (
        <Float speed={0}>
            <mesh position={position}>
                <boxGeometry args={[0.3, 2, 1.4]} />
                <meshNormalMaterial />
                <Text fontSize={0.15} color="white" position={[0, 0, 0.71]} rotation={[0, 0, Math.PI / 2]}>
                    {book.title}
                </Text>
            </mesh>
        </Float>
    )
} 