import './App.css'
import ActiveSlider from './components/ActiveSlider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'
import Work2 from './components/Work2'
import Hero from './components/hero'

function App() {
  return (
    <>
    {/* <main className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory'>
    <section className='snap-center'><Navbar/></section>
      <section className='snap-center'><Hero2/></section>
      <section className='snap-center'><Work/></section>
      <section className='snap-center'><Work2/></section>
      <section className='snap-center'><Footer/></section>
    </main>  */}
    <Navbar/>
    <Hero/>
    <Work/>
    <Projects/>
    <ActiveSlider/>
    <Skills/>
    <Footer/>
    </>
  )
}

export default App
