import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, MessageCircle, Star } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import GlowButton from '../components/GlowButton'
import OpenFeishuButton from '../components/OpenFeishuButton'
import { siteConfig } from '../data/content'
import { fadeInUp } from '../lib/motion'

export default function HeroSection() {
  function scrollToProblems() {
    document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_20%,rgba(124,183,255,0.18)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_75%,rgba(141,223,195,0.15)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(255,201,122,0.10)_0%,transparent_45%)] pointer-events-none" />

      <ParticleBackground density={18} />

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-24 right-[14%] w-11 h-11 rounded-2xl bg-accent-orange/20 border border-accent-orange/35 flex items-center justify-center shadow-sm"
      >
        <Star size={18} className="text-accent-orange" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
        className="absolute top-36 left-[11%] w-10 h-10 rounded-2xl bg-accent-blue/15 border border-accent-blue/25 flex items-center justify-center shadow-sm"
      >
        <Sparkles size={16} className="text-accent-blue" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-36 left-[16%] w-10 h-10 rounded-2xl bg-accent-green/20 border border-accent-green/30 flex items-center justify-center shadow-sm"
      >
        <MessageCircle size={16} className="text-accent-green" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-44 right-[18%] w-8 h-8 rounded-full bg-accent-blue/20 border border-accent-blue/25 shadow-sm"
      />

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/2 right-[8%] w-6 h-6 rounded-full bg-accent-orange/25 border border-accent-orange/30"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 text-accent-blue text-xs tracking-widest mb-8 bg-accent-blue/8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" style={{ animation: 'breathe 2s ease-in-out infinite' }} />
          {siteConfig.teamName}
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-7xl md:text-8xl font-bold text-neutral-100 mb-4 text-glow-blue tracking-tight"
        >
          {siteConfig.productName}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-accent-blue text-lg md:text-xl tracking-wide mb-8 font-medium"
        >
          {siteConfig.productSubtitle}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-6 leading-snug"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton onClick={scrollToProblems} variant="secondary">
            <ChevronDown size={16} />
            了解我们解决了什么
          </GlowButton>
          <OpenFeishuButton />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-accent-blue/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-blue/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
