import {React} from 'react'
import './App.css';
import Navbar from '../src/components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import InputBox from './components/InputBox.jsx';
import Screenshot from './components/Dashboard/screenshot.jsx';

import MetricHeading from './components/Dashboard/MertricHeading.jsx';
import ScoreBoard from './components/Dashboard/ScoreBoard.jsx';
import WebVitals from './components/Dashboard/WebVitals.jsx'
import LabVitals from './components/Dashboard/LabVitals.jsx';


function App() {
 

  return (
 <div className="min-h-screen w-full relative bg-black">
    {/* Arctic Lights Background with Top Glow */}
    <div
      className="absolute inset-0  z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
      }}
    />
  
    {
      <div className= "relative z-10 flex flex-col justify-center items-center ">
       <Navbar></Navbar>
       <Hero></Hero>
       <InputBox></InputBox>
      <MetricHeading></MetricHeading>
     <Screenshot></Screenshot>
     <ScoreBoard></ScoreBoard>
     <MetricHeading></MetricHeading>
     <WebVitals></WebVitals>
     <MetricHeading></MetricHeading>
     <LabVitals></LabVitals>
      </div>
     
    }
  </div>
  )
}

export default App

