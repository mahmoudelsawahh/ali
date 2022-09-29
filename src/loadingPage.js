import { Box } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import Earth from './component/earth';
import EarthBody from './component/earth/earthBody';
import './loadingPage.css' ;

// 07073a
 const LoadingPage = () => {
  return (
    <Box sx={{width: '100% ', height : '100vh' , backgroundColor : '#000' }}>
      <EarthBody/>
      <Canvas>
        <Suspense fallback={null}>
           <Earth/>
        </Suspense>
      </Canvas>
    </Box>
  )
}
export default LoadingPage;