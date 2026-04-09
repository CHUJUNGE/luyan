import { motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type AccentColor = 'blue' | 'orange' | 'green'
type FrameStyle = 'soft-panel' | 'polaroid'

export interface FeatureImageShowcaseProps {
  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  imageAspect?: string
  title: string
  description: string
  tags: string[]
  badge?: string
  align?: 'left' | 'right'
  frameStyle?: FrameStyle
  accentColor?: AccentColor
  frameLabel?: string
  customFrame?: ReactNode
}

const accentMap: Record<
  AccentColor,
  {
    badgeCls: string
    tagCls: string
    barCls: string
    headerBg: string
    frameBg: string
    frameBorder: string
    frameShadow: string
    placeholderFrom: string
    placeholderTo: string
    placeholderIconCls: string
  }
> = {
  blue: {
    badgeCls: 'bg-accent-blue/10 border-accent-blue/25 text-accent-blue',
    tagCls: 'text-accent-blue bg-accent-blue/8 border-accent-blue/20',
    barCls: 'bg-accent-blue',
    headerBg: 'bg-[#D8ECFF]',
    frameBg: 'bg-gradient-to-br from-[#EBF5FF] to-[#F5FAFF]',
    frameBorder: 'border-accent-blue/20',
    frameShadow: 'shadow-[0_16px_48px_rgba(124,183,255,0.18)]',
    placeholderFrom: '#D9EEFF',
    placeholderTo: '#EDF6FF',
    placeholderIconCls: 'text-accent-blue/35',
  },
  orange: {
    badgeCls: 'bg-accent-orange/10 border-accent-orange/25 text-accent-orange',
    tagCls: 'text-accent-orange bg-accent-orange/10 border-accent-orange/20',
    barCls: 'bg-accent-orange',
    headerBg: 'bg-[#FFE8B8]',
    frameBg: 'bg-gradient-to-br from-[#FFF8EE] to-[#FFFCF7]',
    frameBorder: 'border-accent-orange/20',
    frameShadow: 'shadow-[0_16px_48px_rgba(255,201,122,0.20)]',
    placeholderFrom: '#FFE8B8',
    placeholderTo: '#FFF5E0',
    placeholderIconCls: 'text-accent-orange/35',
  },
  green: {
    badgeCls: 'bg-accent-green/10 border-accent-green/25 text-accent-green',
    tagCls: 'text-accent-green bg-accent-green/10 border-accent-green/20',
    barCls: 'bg-accent-green',
    headerBg: 'bg-[#C5E9D8]',
    frameBg: 'bg-gradient-to-br from-[#EDF9F4] to-[#F5FCF9]',
    frameBorder: 'border-accent-green/20',
    frameShadow: 'shadow-[0_16px_48px_rgba(141,223,195,0.18)]',
    placeholderFrom: '#C2EBD8',
    placeholderTo: '#E5F7EF',
    placeholderIconCls: 'text-accent-green/35',
  },
}

interface ImageFrameProps {
  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  imageAspect?: string
  frameStyle: FrameStyle
  accentColor: AccentColor
  frameLabel?: string
}

function ImageFrame({
  image,
  imageAlt = '',
  imageFit = 'cover',
  imageAspect = '4/3',
  frameStyle,
  accentColor,
  frameLabel,
}: ImageFrameProps) {
  const s = accentMap[accentColor]

  const placeholder = (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: `linear-gradient(135deg, ${s.placeholderFrom} 0%, ${s.placeholderTo} 100%)` }}
    >
      <ImageIcon size={38} className={s.placeholderIconCls} strokeWidth={1.3} />
      <span className={`text-xs font-medium tracking-wide ${s.placeholderIconCls}`}>真实截图即将上线</span>
    </div>
  )

  if (frameStyle === 'polaroid') {
    return (
      <div className={`bg-white p-4 pb-10 rounded-3xl border ${s.frameBorder} ${s.frameShadow}`}>
        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: imageAspect }}>
          {image ? (
            <img src={image} alt={imageAlt} className={`w-full h-full object-${imageFit}`} />
          ) : placeholder}
        </div>
        {frameLabel && (
          <p className="text-center text-[11px] text-neutral-400/60 mt-5 tracking-[0.18em] font-medium uppercase">
            {frameLabel}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={`${s.frameBg} rounded-3xl border ${s.frameBorder} ${s.frameShadow} overflow-hidden`}>
      <div className={`px-5 py-3 ${s.headerBg} border-b border-white/50 flex items-center gap-2.5`}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/65" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/65" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/65" />
        </div>
        {frameLabel && (
          <span className="text-[10px] text-neutral-500/55 font-mono ml-1 tracking-widest uppercase">
            {frameLabel}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: imageAspect }}>
          {image ? (
            <img src={image} alt={imageAlt} className={`w-full h-full object-${imageFit}`} />
          ) : placeholder}
        </div>
      </div>
    </div>
  )
}

export default function FeatureImageShowcase({
  image,
  imageAlt = '',
  imageFit = 'cover',
  imageAspect = '4/3',
  title,
  description,
  tags,
  badge,
  align = 'left',
  frameStyle = 'soft-panel',
  accentColor = 'blue',
  frameLabel,
  customFrame,
}: FeatureImageShowcaseProps) {
  const s = accentMap[accentColor]
  const textLeft = align === 'left'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: textLeft ? -28 : 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={!textLeft ? 'order-1 lg:order-2' : ''}
      >
        {badge && (
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-5 ${s.badgeCls}`}>
            {badge}
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-3">{title}</h3>
        <div className={`h-0.5 w-10 ${s.barCls} rounded-full opacity-60 mb-5`} />
        <p className="text-neutral-400 text-base leading-relaxed mb-7">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className={`text-xs border rounded-full px-3 py-1 ${s.tagCls}`}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: textLeft ? 28 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={!textLeft ? 'order-2 lg:order-1' : ''}
      >
        {customFrame ?? (
          <ImageFrame
            image={image}
            imageAlt={imageAlt}
            imageFit={imageFit}
            imageAspect={imageAspect}
            frameStyle={frameStyle}
            accentColor={accentColor}
            frameLabel={frameLabel}
          />
        )}
      </motion.div>
    </div>
  )
}
