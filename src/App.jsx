import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Projectgrid from './components/Projectgrid'
import Experience from './components/Experience'
import Checkout from './components/Checkout'
//find a better serif font
//fix the colors in tailwind.config.js

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Experience/>
    {/* <Projectgrid/> */}
    {/* <Checkout/> */}
    <Footer/>
    </>
  )
}

export default App
