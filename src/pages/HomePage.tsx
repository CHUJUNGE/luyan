import HeroSection from '../sections/HeroSection'
import ProblemSection from '../sections/ProblemSection'
import SolutionSection from '../sections/SolutionSection'
import FeaturesSection from '../sections/FeaturesSection'
import TechSection from '../sections/TechSection'
import GallerySection from '../sections/GallerySection'
import CTASection from '../sections/CTASection'

export default function HomePage() {
  return (
    <main className="bg-bg-primary">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TechSection />
      <GallerySection />
      <CTASection />
    </main>
  )
}
