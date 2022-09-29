import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoadingPage from './loadingPage';
import Home from './pages/Home/home';

 const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<LoadingPage/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </>
  )
}
export default App;