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
      <div className= "relative z-10 flex flex-col justify-center items-center overflow-x-hidden ">
       <Navbar></Navbar>
       <Hero></Hero>
       <InputBox></InputBox>
      <MetricHeading heading="Overall Health Scorecard" description=" The 'Overall Health Scorecard' serves as the executive summary of your website's performance and quality. It provides an immediate, high-level overview, allowing developers and stakeholders to grasp the general health of the page at a single glance without diving into granular details."></MetricHeading>
     <Screenshot></Screenshot>
     <ScoreBoard></ScoreBoard>
     <MetricHeading heading="Core Web Vitals Status" description="This section focuses on Google's most important user-centric performance metrics, which are now key ranking signals. It's designed to give a precise understanding of the page's loading speed, interactivity, and visual stability from both real users and simulated tests."></MetricHeading>
     <WebVitals></WebVitals>
     <MetricHeading heading="Key Lab Performance Metrics" description="This section details specific metrics collected in the Lighthouse lab environment that provide granular diagnostic insights into different phases of your page's loading and interactivity. While they might not be Core Web Vitals themselves, they are often root causes of poor CWV scores."></MetricHeading>
     <LabVitals></LabVitals>
      </div>
     
    }
  </div>
  )
}

export default App

