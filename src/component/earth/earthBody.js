import './earthBody.css'
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  parent: {
    position : 'absolute' ,
     top: '40%' ,
     left : '51%',
     zIndex : 99  , 
    display : 'flex' ,
    flexDirection : 'column' , 
    alignItems : 'center',
    transform: "translate(-50%, -50%)",
    width : '80%'
  },
});
 const EarthBody = () => {
  const classes = useStyles();
  return (
    <div className=''>
      <Box className={classes.parent}>
         <h1 className='firstChild'>Global Warming</h1>
        <h5 className='secChild'>
          Keep It Cool To Save Loving
        </h5>
        <p className='footer'>
        You can help us cool off our world and have it go back to it's best
        state ever by donating to help fix our only world and our beloved
        </p>
        <Link to={'/home'}>
        <Button variant='outlined'  size="medium">Get Start</Button>
        </Link>
    </Box>
    </div>
  )
}
export default EarthBody;