import React, { useRef, useState, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Stage, OrbitControls, useGLTF } from '@react-three/drei';

import famicomGLTF from '../../../models/famicom/famicom.gltf?url';

const Famicom: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <Canvas style={{
                width: `auto`,
                height: `180px`,
            }}
            >
                <PerspectiveCamera makeDefault={true} />
                <Stage>
                    <Model />
                </Stage>
            </Canvas>
        </Suspense>
    )
}

export default Famicom;

const Model: React.FC = () => {
    const ref = useRef<THREE.Mesh>();
    const model = useGLTF(famicomGLTF);
    const { gl } = useThree();

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
        }
    });
    gl.setPixelRatio(0.6);
    return (
        <group dispose={null} >
            <primitive ref={ref} scale={[1, 1, 1]} object={model.scene} />
        </group>
    )
}