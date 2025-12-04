import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Professional } from './components/Professional/Professional'
import { Projects } from './components/Projects/Projects'
import { TechnicalSkills } from './components/TechnicalSkills/TechnicalSkills'
import { Skills } from './components/Skills/Skills'
import { Annexes } from './components/Annexes/Annexes'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Professional />
      <Projects />
      <TechnicalSkills />
      <Skills />
      <Annexes />
      <Footer />
    </div>
  )
}

export default App