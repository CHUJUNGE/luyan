import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { features } from '../data/content'
import FeatureImageShowcase from '../components/FeatureImageShowcase'
import UndercoverMockup from '../components/UndercoverMockup'

// ── Image paths – replace `undefined` with a real import or URL when screenshots are ready ──
const FEATURE_IMAGES: Record<'chat' | 'script' | 'undercover', string | undefined> = {
  chat: '/luyan/chat-screenshot.png',
  script: '/luyan/script-screenshot.png',
  undercover: undefined, // TODO: 谁是卧底 DM 截图
}

export default function FeaturesSection() {
  const [f0, f1, f2] = features

  return (
    <section className="relative py-28 px-6 bg-bg-tertiary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(124,183,255,0.09)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(141,223,195,0.07)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs tracking-widest mb-4 font-medium">
            <Sparkles size={12} /> 核心功能
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100">三种方式，让群聊重新活起来</h2>
        </motion.div>

        {/* ── Feature 1: 群聊氛围搭子 — 左文右图 ── */}
        <div className="mb-28">
          <FeatureImageShowcase
            title={f0.title}
            description={f0.description}
            tags={f0.tags}
            badge="主功能"
            align="left"
            accentColor="blue"
            frameStyle="soft-panel"
            frameLabel="CHAT · 群聊截图"
            image={FEATURE_IMAGES.chat}
          />
        </div>

        {/* ── Feature 2: AI 剧本杀 DM — 左图右文 ── */}
        <div className="mb-28">
          <FeatureImageShowcase
            title={f1.title}
            description={f1.description}
            tags={f1.tags}
            badge="延展功能"
            align="right"
            accentColor="orange"
            frameStyle="polaroid"
            frameLabel="AI DM · 剧本杀"
            image={FEATURE_IMAGES.script}
          />
        </div>

        {/* ── Feature 3: 谁是卧底 DM — 左文右图 ── */}
        <FeatureImageShowcase
          title={f2.title}
          description={f2.description}
          tags={f2.tags}
          badge="延展功能"
          align="left"
          accentColor="green"
          frameStyle="soft-panel"
          frameLabel="GAME · 谁是卧底"
          image={FEATURE_IMAGES.undercover}
          customFrame={<UndercoverMockup />}
        />

      </div>
    </section>
  )
}
