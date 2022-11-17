import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  )
}

{/* <a target="_blank" href="https://icons8.com/icon/13195/geometry">Geometry</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */ }

export default App
