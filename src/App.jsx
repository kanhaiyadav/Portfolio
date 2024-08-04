import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/home'
import Nav from './components/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

    return (
        <>
            <Nav />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default App
