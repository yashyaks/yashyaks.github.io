import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Hero from './components/hero'
//find a better serif font
//fix the colors in tailwind.config.js

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
