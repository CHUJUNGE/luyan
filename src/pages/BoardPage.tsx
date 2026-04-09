import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, MessagesSquare, ScrollText, ShieldQuestion } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import OpenFeishuButton from '../components/OpenFeishuButton'
import { siteConfig, features, techBadges } from '../data/content'
import { fadeInUp } from '../lib/motion'

const featureIcons = [MessagesSquare, ScrollText, ShieldQuestion]

export default function BoardPage() {
  return (
    <div className="relative min-h-screen bg-bg-primary overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(124,183,255,0.15)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_75%,rgba(141,223,195,0.12)_0%,transparent_55%)] pointer-events-none" />
      <ParticleBackground density={25} />

      <div className="absolute top-5 left-6 z-20">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-accent-blue transition-colors">
          <ArrowLeft size={15} />
          返回主页
        </Link>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between p-8 md:p-14 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start flex-1">
          <div className="flex flex-col justify-between h-full">
            <div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 text-accent-blue text-xs tracking-widest mb-8 bg-accent-blue/8"
              >
                {siteConfig.teamName}
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-6xl md:text-7xl font-bold text-neutral-100 mb-4 tracking-tight"
              >
                {siteConfig.productName}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-accent-blue text-lg tracking-wide mb-5 font-medium"
              >
                {siteConfig.productSubtitle}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-xl font-medium text-neutral-100 mb-10 leading-snug"
              >
                {siteConfig.tagline}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="space-y-3 mb-10"
              >
                {techBadges.map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-accent-green flex-shrink-0" />
                    <span className="text-neutral-300 text-sm">
                      <span className="font-medium">{b.label}</span>
                      <span className="text-neutral-400"> — {b.desc}</span>
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={5}>
                <OpenFeishuButton />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-xs text-accent-blue/60 tracking-widest font-mono mb-5">CORE FEATURES</p>
              <div className="space-y-5">
                {features.map((f, i) => {
                  const Icon = featureIcons[i]
                  const iconBgs = ['bg-accent-blue/12', 'bg-accent-orange/15', 'bg-accent-green/15']
                  const iconTexts = ['text-accent-blue', 'text-accent-orange', 'text-accent-green']
                  return (
                    <div key={f.id} className="flex items-start gap-4">
                      <div className={`w-9 h-9 rounded-xl ${iconBgs[i]} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={18} className={iconTexts[i]} />
                      </div>
                      <div>
                        <p className="text-neutral-100 font-medium text-sm mb-1">{f.title}</p>
                        <p className="text-neutral-400 text-xs leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-xs text-accent-blue/60 tracking-widest font-mono mb-4">DEMO GALLERY</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  '群聊氛围搭子在运行',
                  'AI 剧本杀 DM 推进剧情',
                  '谁是卧底游戏进行中',
                ].map((caption, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl bg-gradient-to-br from-bg-tertiary to-bg-secondary border border-accent-blue/10 flex items-center justify-center p-2"
                  >
                    <p className="text-neutral-400 text-[10px] text-center leading-relaxed">{caption}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="mt-10 pt-6 border-t border-neutral-400/15 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex flex-wrap gap-5">
            {['OpenClaw-powered', 'Feishu-native', 'Live demo ready', 'Workplace entertainment for introverts'].map((tag) => (
              <span key={tag} className="text-neutral-400/60 text-xs tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-neutral-400/40 text-xs">{siteConfig.teamName} · 2025</span>
        </motion.div>
      </div>
    </div>
  )
}
