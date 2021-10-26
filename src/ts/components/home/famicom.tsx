import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import famicom from '../../../models/famicom/famicom.gltf'

const Famicom: React.FC = () => {
    const gltf = useLoader(GLTFLoader, famicom);
    return (
        <Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </Suspense>
    )
}

export default Famicom;