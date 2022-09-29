import React from 'react'
import { Stars } from '@react-three/drei';
 const LandingStar = () => {
  return (
    <>
        <Stars radius={300} depth={60} count={20000} factor={8} saturation={0} fade={true}/>
    </>
  )
}
export default LandingStar