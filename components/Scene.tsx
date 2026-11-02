'use client'

import { Canvas } from '@react-three/fiber'


export default function Scene() {
    return (
        <>
            <Canvas>
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
        </>
    )
}