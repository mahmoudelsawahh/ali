import './BodyHome.css'
import { Box, Typography, Button } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'
import Earth from '../planets/earch.js';
import Moon from '../planets/moon';
import Venus from '../planets/venus';
import Neptune from '../planets/neptune';
import Layout from '../layout';
import Navbar from '../layout/Navbar';

const BodyHome = () => {
  const [moon, setMoon] = useState(true);
  const [earth, setEarth] = useState(false);
  const [venus, setVenus] = useState(false);
  const [neptune, setNeptune] = useState(false);

  const planets = () => {
    if (moon) {
      return <Moon />
    } else if (earth) {
      return <Earth />
    } else if (venus) {
      return <Venus />
    } else if (neptune) {
      return <Neptune />
    }
  }
  function resetAll(i) {
    if (i === 0) {
      setMoon(true)
      setEarth(false)
      setVenus(false)
      setNeptune(false)
    } else if (i === 1) {
      setEarth(true)
      setVenus(false)
      setNeptune(false)
      setMoon(false)
    } else if (i === 2) {
      setVenus(true)
      setNeptune(false)
      setMoon(false)
      setEarth(false)

    } else {
      setNeptune(true)
      setMoon(false)
      setEarth(false)
      setVenus(false)
    }
  }
  const options = [
    {
      text: "Moon",


    },
    {
      text: "Earth",


    },
    {
      text: "Venus",


    },
    {
      text: "Neptune",


    }
  ]

  return (
    <Box sx={{backgroundColor : '#000' }}>
      <Box sx={{ width: { xl: '80%', xs: ' 80%' }, margin: 'auto', display: { lg: 'flex', xs: 'block' }, justifyContent: 'center', 
      alignItems: 'center', color: '#fff' }}>
        <Box sx={{ width: { lg: '50%', xs: '100%' }, height: { lg: '500px', xs: '400px' } }} className="planetBox">
          <h1 className='headerImg' sx={{ fontSize: '10px' }}><span>01</span> Pick your  DESTINATiON</h1>
          <Canvas className='canvas'>
            <Suspense fallback={null}>
              {planets()}
            </Suspense>
          </Canvas>
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ width: { lg: '40%', xs: '100%' } }} className="test">
          <Box>


            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: '50px' }}>

              {options.map((item, index) => (
                <Button key={index}  sx={{color:'white', fontWeight:'bold',fontSize:'20px'}} fontSize={18}  fontWeight={500} onClick={() => {
                  resetAll(index);
                }} >
                  {item.text}
                </Button>
              ))}
            </Box>

          </Box>
          <Typography variant='h1' >MOON</Typography>
          <Typography sx={{ lineHeight: '2.1', marginBottom: '25px' }}>
            The Moon is Earth's only natural satellite. Together with Earth it forms the Earth–Moon satellite system. It is about one-quarter of Earth in diameter (comparable to the width of Australia).[16] In the Solar System it is the fifth largest satellite, larger than any of the known dwarf planets and the largest (and most massive) satellite of a planet relative to the planet.
          </Typography>
          <hr style={{ marginBottom: '30px' }} />

          <Box sx={{ display: 'flex', alignItems: 'center', width: '95%' }}>
            <Box sx={{ width: '50%' }}>
              <Typography variant='h6' mb={2}>AVG, distance</Typography>
              <h2 variant='h4'>384,400 KM</h2>
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography variant='h6' mb={2}>EST, travel time</Typography>
              <h2>3 Days</h2>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default BodyHome;