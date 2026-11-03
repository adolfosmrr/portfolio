'use client'

import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'


export default function Scene() {
    return (
        <>
            <Canvas camera={{position: [3, 6, 4], fov: 40 }}>
                <Float speed={20} floatIntensity={2} rotationIntensity={2}>
                    <mesh>
                        <boxGeometry />
                        <meshNormalMaterial />
                    </mesh>
                </Float>
            </Canvas>
        </>
    )
}