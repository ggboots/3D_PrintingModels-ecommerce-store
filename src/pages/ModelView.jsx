// import React from 'react'
// import * as THREE from 'three'
// import { Canvas, extend, useThree } from "@react-three/fiber"
// import { OrbitControls } from 'three/examples/jsm/Addons.js'
// import WebglScene from "../components/Webgl/WebglLoader"

// extend({ OrbitControls})

// export default function ModelView(){


//     const [isTitleVisible, setIsTitleVisible] = React.useState(true);

//     setTimeout(() => {
//         setIsTitleVisible(false)
//     },2500);

//     return(
//         <div id='webgl-container'>
//         <Canvas  
//             gl={ {
//             antialias: true,
//             toneMapping: THREE.ACESFilmicToneMapping,
//             // outputColorSpace: THREE.SRGBColorSpace
//         } }
//         camera={ {
//             fov: 50,
//             near: 0.1,
//             far: 100,
//             position: [ 2, 7, 5 ]
//         } }>
//             <WebglScene/>
//         </Canvas>
//         {isTitleVisible && <h1 className="model-title">Model Loading</h1>}


//         {/* <script src="/dvlpText.js" type="text/javascript"></script> */}
//         </div>
//     )
// }