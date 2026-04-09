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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0, boxShadow: '0 12px 40px rgba(47,58,79,0.14)' }}
              onClick={() => img.src && setLightbox(img)}
              className="bg-white rounded-xl overflow-hidden cursor-pointer border border-neutral-100/50 shadow-[0_4px_20px_rgba(47,58,79,0.08)] transition-all duration-300"
            >
              {img.src ? (
                <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl border border-accent-blue/25 bg-accent-blue/8 flex items-center justify-center mx-auto mb-3">
                      <div className="w-2 h-2 rounded-full bg-accent-blue/60" />
                    </div>
                    <p className="text-neutral-400 text-xs">图片待添加</p>
                  </div>
                </div>
              )}
              <div className="px-5 py-4 bg-white">
                <p className="text-neutral-300 text-sm">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {items.length > 3 && (
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white border border-neutral-100/50 shadow-sm flex items-center justify-center text-neutral-400 hover:text-accent-blue transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white border border-neutral-100/50 shadow-sm flex items-center justify-center text-neutral-400 hover:text-accent-blue transition-colors"
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
            className="fixed inset-0 z-50 bg-neutral-100/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-neutral-300 hover:text-neutral-100 bg-white rounded-full p-1 shadow"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sr-only">{active}</div>
    </>
  )
}
