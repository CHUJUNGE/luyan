import SectionTitle from '../components/SectionTitle'
import ScreenshotGallery from '../components/ScreenshotGallery'

export default function GallerySection() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="它已经在群聊里发生，而不只是停留在想象里"
          align="center"
        />
        <ScreenshotGallery />
      </div>
    </section>
  )
}
