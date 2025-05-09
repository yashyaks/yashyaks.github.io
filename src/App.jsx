import './App.css'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Resume from './components/Resume'

import {HashRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes basename="/">
        <Route exact path='/' element={<Hero/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </Router>
  )
}

export default App
