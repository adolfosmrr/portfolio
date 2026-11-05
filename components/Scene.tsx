'use client'

import BookRow from './BookRow'

import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'

export default function Scene() {

    return (
        <>
            <Canvas camera={{position: [-3, 2, 4], fov: 40 }}>
                <ambientLight intensity={1} />
                <BookRow />
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <MeshReflectorMaterial mirror={1} resolution={1024} color="#888" blur={[300, 100]} mixBlur={0.8} mixStrength={1.5} roughness={1} />
                </mesh>
            </Canvas>
        </>
    )
}