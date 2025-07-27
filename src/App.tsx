import Navbar from './components/Navbar'
import Contact from './sections/Contact.tsx'
import Experience from './sections/Experience'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer.tsx'
import Hero from './sections/Hero'
import Logo from './sections/Logo.tsx'
import Showcase from './sections/Showcase.tsx'
import TechStack from './sections/TechStack.tsx'
import Testimonials from './sections/Testimonials.tsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Logo />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
