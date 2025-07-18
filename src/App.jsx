import {React} from 'react'
import './App.css';
import Navbar from '../src/components/Navbar.jsx'
import Hero from './components/Hero.jsx';
import InputBox from './components/InputBox.jsx';
import Display from './components/Display.jsx';
import { usePageSpeed } from './Services/pageSpeedStore.js';
import LoaderAnimation from './components/Loader.jsx';
import Footer from './components/footer.jsx';

function App() {
 
const {loading} = usePageSpeed();
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
     {loading? <LoaderAnimation></LoaderAnimation>: <Display></Display>}
     <Footer></Footer>
      </div>
     
    }
  </div>
  )
}

export default App

