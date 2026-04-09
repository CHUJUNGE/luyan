import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(79,114,201,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(169,184,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(169,184,200,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <ParticleBackground density={50} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/30 text-accent-light text-xs tracking-widest mb-8 backdrop-blur-sm bg-accent-blue/5"
        >
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
          className="text-accent-light text-lg md:text-xl tracking-wide mb-8 font-light"
        >
          {siteConfig.productSubtitle}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-2xl md:text-3xl font-medium text-neutral-100 mb-6 leading-snug"
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
          className="w-5 h-8 rounded-full border border-neutral-400/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-blue/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
