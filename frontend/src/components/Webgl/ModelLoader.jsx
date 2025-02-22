import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useRef } from "react"


export default function Model(){
    const model = useLoader(GLTFLoader, "./gltf/SocketAdapterHolder.gltf")
    const modelRef = useRef() 

    useFrame(() => {
            // modelRef.current.rotation.y += 0.0095
    })


    return <primitive ref={modelRef} object={model.scene} scale={0.025}/>

}