import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Certifications } from './components/Certifications'
import { ValidationCTA } from './components/ValidationCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Certifications />
        <ValidationCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
