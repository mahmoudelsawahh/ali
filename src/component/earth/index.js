import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  const earthRef = useRef();
  const cloudRef = useRef();
  const [size, setSize] = useState(3);
  // let width = screen.width;
  
  useEffect(() => {
    if (window.screen.width < 461) {
      setSize(1)

    } else if (window.screen.width > 461 && window.screen.width < 768) {
      setSize(2)
    }
    window.addEventListener('resize', () => {
      if (window.screen.width < 461) {
        setSize(1)

      } else if (window.screen.width > 461 && window.screen.width < 768) {
        setSize(2)
      }
    })
  })
  // setSize(2);

  console.log(window.screen.width);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6
    cloudRef.current.rotation.y = elapsedTime / 6

  },)
  // setSize(size-1)

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color={'#ffffff'} position={[2, 0, 5]} intensity={1.2} />
      <Stars radius={600} depth={60} count={20000} factor={8} saturation={0} fade={true} />
      <mesh ref={cloudRef} position={[0, 0, size]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />

      </mesh>

      <mesh ref={earthRef} position={[0, 0, size]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0} panSpeed={0} rotateSpeed={0} />
      </mesh>
    </>
  )
}
export default Earth