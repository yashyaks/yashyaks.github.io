import './App.css'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Resume from './components/Resume'
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

import {HashRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route exact path='/' element={<Hero/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:slug' element={<BlogPost />} />

      </Routes>
    </Router>
  )
}

export default App
