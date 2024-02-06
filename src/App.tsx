import './index.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Mercury from "./components/pages/Mercury";
import Venus from "./components/pages/Venus";
import Earth from "./components/pages/Earth";
import Mars from "./components/pages/Mars";
import Jupiter from "./components/pages/Jupiter";
import Saturn from "./components/pages/Saturn";
import Uranus from "./components/pages/Uranus"
import Neptune from "./components/pages/Neptune"
import Dropdown from "./components/header/Dropdown";

function App() {
  
  return (
    <>
    <Header />
    <Dropdown/>
    <Routes>
      <Route path="/" element={<Earth />} />
      <Route path="mercury" element={<Mercury />} />
      <Route path="venus" element={<Venus />} />
      <Route path="earth" element={<Earth />} />  
      <Route path="mars" element={<Mars />} />
      <Route path="jupiter" element={<Jupiter />} />
      <Route path="saturn" element={<Saturn />} />
      <Route path="uranus" element={<Uranus />} />
      <Route path="neptune" element={<Neptune />} /> 
    </Routes>
    </>
  )
}

export default App
