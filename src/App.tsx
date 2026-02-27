
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import FeaturedPizzas from './components/FeaturedPizzas/FeaturedPizzas'
import BrandExperience from './components/BrandExperience/BrandExperience'
import MenuPreview from './components/MenuPreview/MenuPreview'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'
import BackToTop from './components/BackToTop/BackToTop'
import FlavorProfiler from './components/FlavorProfiler/FlavorProfiler'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow">
        <div className="glow-blob glow-blob-1"></div>
        <div className="glow-blob glow-blob-2"></div>
        <div className="glow-blob glow-blob-3"></div>
      </div>
      <Header />
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <FeaturedPizzas />
            <FlavorProfiler />
            <BrandExperience />
            <MenuPreview />
            <Newsletter />
            <CTASection />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
