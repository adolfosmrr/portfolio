'use client'

import { Canvas } from '@react-three/fiber'


export default function Scene() {
    return (
        <>
            <Canvas camera={{position: [3, 6], fov: 40 }}>
                <mesh>
                    <boxGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
        </>
    )
}