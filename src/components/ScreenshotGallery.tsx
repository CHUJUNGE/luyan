import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryImages } from '../data/content'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface ScreenshotGalleryProps {
  images?: GalleryImage[]
}

const placeholders: GalleryImage[] = [
  { src: '', alt: '飞书群聊截图 1', caption: '群聊氛围搭子在运行' },
  { src: '', alt: '飞书群聊截图 2', caption: 'AI 剧本杀 DM 推进剧情' },
  { src: '', alt: '飞书群聊截图 3', caption: '谁是卧底游戏进行中' },
]

export default function ScreenshotGallery({ images }: ScreenshotGalleryProps) {
  const items = (images ?? galleryImages).length > 0 ? (images ?? galleryImages) : placeholders
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  function prev() {
    setActive((i) => (i - 1 + items.length) % items.length)
  }
  function next() {
    setActive((i) => (i + 1) % items.length)
  }

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(79,114,201,0.25)' }}
              onClick={() => img.src && setLightbox(img)}
              className="glass-card rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-accent-blue/30 transition-all duration-300"
            >
              {img.src ? (
                <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-bg-secondary to-bg-primary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full border border-accent-blue/30 flex items-center justify-center mx-auto mb-3">
                      <div className="w-2 h-2 rounded-full bg-accent-blue/60" />
                    </div>
                    <p className="text-neutral-400 text-xs">图片待添加</p>
                  </div>
                </div>
              )}
              <div className="p-4">
                <p className="text-neutral-300 text-sm">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {items.length > 3 && (
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-neutral-400 hover:text-accent-light transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-neutral-400 hover:text-accent-light transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sr-only">{active}</div>
    </>
  )
}
