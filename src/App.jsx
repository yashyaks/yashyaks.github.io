import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Experience from './components/Experience'
//find a better serif font
//fix the colors in tailwind.config.js

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Experience/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
