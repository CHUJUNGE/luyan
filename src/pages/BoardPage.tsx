import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import { siteConfig } from '../data/content'

const flowSteps = [
  { title: '背景导入', caption: 'DM 发布剧本背景，开启故事', img: 'step-01-intro.png' },
  { title: '身份私发', caption: '角色卡片私信送达，各知其秘', img: 'step-02-identity.png' },
  { title: '线索投放', caption: 'AI 按时解锁线索，推进调查', img: 'step-03-clue.png' },
  { title: '流程推进', caption: 'DM 自动切换阶段，掌控节奏', img: 'step-04-progress.png' },
  { title: '组织投票', caption: '发起投票，玩家指认凶手', img: 'step-05-vote.png' },
  { title: '结局复盘', caption: '揭晓答案，剧情全貌尽现', img: 'step-06-ending.png' },
]

const INTERVAL = 5000

export default function BoardPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % flowSteps.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const step = flowSteps[current]

  return (
    <div className="relative h-screen bg-bg-primary overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(124,183,255,0.13)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(141,223,195,0.10)_0%,transparent_55%)] pointer-events-none" />
      <ParticleBackground density={20} />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-8 pt-6 shrink-0">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-accent-blue transition-colors">
          <ArrowLeft size={15} />
          返回主页
        </Link>
        <div className="text-center">
          <p className="text-accent-blue text-xs tracking-widest mb-0.5">{siteConfig.productName} · {siteConfig.teamName}</p>
          <h1 className="text-2xl font-bold text-neutral-100 tracking-tight">AI 剧本杀 DM</h1>
        </div>
        <div className="w-24" />
      </div>

      {/* Slide area */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-10 py-4 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full max-w-5xl"
          >
            <div className="rounded-3xl overflow-hidden border border-accent-blue/15 shadow-[0_8px_48px_rgba(47,58,79,0.10)] bg-white flex flex-col">
              <img
                src={`${import.meta.env.BASE_URL}${step.img}`}
                alt={step.title}
                className="w-full max-h-[62vh] object-contain bg-bg-primary"
              />
              <div className="px-8 py-5 border-t border-neutral-100/8">
                <h2 className="text-xl font-bold text-neutral-100 mb-1">{step.title}</h2>
                <p className="text-neutral-400 text-sm">{step.caption}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="relative z-10 shrink-0 pb-7 flex flex-col items-center gap-3">
        {/* Progress bar */}
        <div className="w-56 h-0.5 bg-neutral-100/12 rounded-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            className="h-full bg-accent-blue rounded-full"
          />
        </div>
        {/* Dot nav */}
        <div className="flex gap-2 items-center">
          {flowSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 h-2 bg-accent-blue'
                  : 'w-2 h-2 bg-neutral-100/25 hover:bg-neutral-100/50'
              }`}
            />
          ))}
        </div>
        <p className="text-neutral-400/60 text-xs">
          从开场到复盘，虾得乐可以在群里完整推进一局剧本杀。
        </p>
      </div>
    </div>
  )
}
