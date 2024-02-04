// import { useState } from 'react'
import './index.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Mercury from "./components/mainPage/Page";
import Venus from "./components/pages/venus/Venus";
import Earth from "./components/pages/earth/Earth";



function App() {
  

  return (
    <>
    <Header />
    {/* <Mercury /> */}
    <Routes>
      <Route path="/" element={<Earth />} />
      <Route path="mercury" element={<Mercury />} />
      <Route path="venus" element={<Venus />} />
       <Route path="earth" element={<Earth />} />  
      {/*<Route path="mars" element={<Mars />} />
      <Route path="jupiter" element={<Jupiter />} />
      <Route path="saturn" element={<Saturn />} />
      <Route path="uranus" element={<Uranus />} />
      <Route path="neptune" element={<Neptune />} /> */}
    </Routes>
    </>
  )
}

export default App
