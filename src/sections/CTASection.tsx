import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LayoutDashboard, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import OpenFeishuButton from '../components/OpenFeishuButton'
import GlowButton from '../components/GlowButton'
import { fadeInUp } from '../lib/motion'

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="relative py-36 px-6 bg-bg-tertiary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(124,183,255,0.12)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(141,223,195,0.10)_0%,transparent_55%)] pointer-events-none" />

      <div ref={ref} className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent-orange/12 border border-accent-orange/25 text-accent-orange text-xs"
        >
          <Sparkles size={12} />
          不如去群里看看虾得乐今天在干嘛
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="text-3xl md:text-4xl font-semibold text-neutral-100 leading-tight mb-5"
        >
          接下来，不如直接和虾得乐聊一聊
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
          className="text-neutral-400 text-base leading-relaxed mb-10"
        >
          你已经看到它解决的问题、介入的方式，以及背后的技术基础。
          <br />
          接下来最有说服力的不是继续介绍，而是直接进入飞书群聊，看它在真实场景里运行。
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <OpenFeishuButton />
          <Link to="/board">
            <GlowButton variant="secondary">
              <LayoutDashboard size={16} />
              查看答辩背景板
            </GlowButton>
          </Link>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-neutral-400/15 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-400/60 text-xs relative z-10">
        <p>虾得乐 &copy; 2025 一侠天開</p>
        <p>OpenClaw Bot · Feishu Native · Live Demo Ready</p>
      </div>
    </section>
  )
}
