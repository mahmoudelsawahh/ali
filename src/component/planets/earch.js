import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
const Earth= () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  const earthRef = useRef();
  const cloudRef = useRef();
  // let width = screen.width;

  // setSize(2);

//   console.log(window.screen.width);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 16
    cloudRef.current.rotation.y = elapsedTime / 18

  },)
  // setSize(size-1)

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color={'#f6f3ea'} position={[40 , 0 , 5]} intensity={1.2}/>

      {/* <Stars radius={1000} depth={60} count={2000} factor={8} saturation={0} fade={true} /> */}
      <mesh ref={cloudRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.55, 32, 32]} raduis={10}/>
        <meshPhongMaterial map={cloudsMap} opacity={0.3} depthWrite={true} transparent={true} side={THREE.DoubleSide} />

      </mesh>

      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.5} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
      </mesh>
    </>
  )
}
export default Earth