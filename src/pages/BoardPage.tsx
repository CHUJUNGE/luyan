import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'
import { siteConfig } from '../data/content'

interface Step {
  title: string
  caption: string
  img: string
}

const scriptSteps: Step[] = [
  { title: '背景导入', caption: 'DM 发布剧本背景，开启故事', img: 'step-01-intro.png' },
  { title: '身份私发', caption: '角色卡片私信送达，各知其秘', img: 'step-02-identity.png' },
  { title: '线索投放', caption: 'AI 按时解锁线索，推进调查', img: 'step-03-clue.png' },
  { title: '流程推进', caption: 'DM 自动切换阶段，掌控节奏', img: 'step-04-progress.png' },
  { title: '组织投票', caption: '发起投票，玩家指认凶手', img: 'step-05-vote.png' },
  { title: '结局复盘', caption: '揭晓答案，剧情全貌尽现', img: 'step-06-ending.png' },
]

const undercoverSteps: Step[] = [
  { title: '开始游戏', caption: '机器人开局，规则说明一键到位', img: 'undercover-01-start.png' },
  { title: '私发身份牌', caption: '平民与卧底词语私信送达，各知其秘', img: 'undercover-02-identity.png' },
  { title: '安排讨论', caption: '引导玩家轮流发言，气氛全面拉满', img: 'undercover-03-discuss.png' },
  { title: '进行投票', caption: '投票环节自动发起，指认卧底嫌疑人', img: 'undercover-04-vote.png' },
  { title: '公布结果', caption: '揭晓卧底身份，胜负一目了然', img: 'undercover-05-result.png' },
]

const INTERVAL = 5000

interface CarouselPanelProps {
  label: string
  steps: Step[]
  accentBlue?: boolean
  intervalOffset?: number
}

function CarouselPanel({ label, steps, accentBlue = true, intervalOffset = 0 }: CarouselPanelProps) {
  const [current, setCurrent] = useState(0)

  const accentBar = accentBlue ? 'bg-accent-blue' : 'bg-accent-green'
  const accentBorder = accentBlue ? 'border-accent-blue/15' : 'border-accent-green/15'
  const accentDotActive = accentBlue ? 'bg-accent-blue' : 'bg-accent-green'
  const accentLabel = accentBlue ? 'text-accent-blue' : 'text-accent-green'

  useEffect(() => {
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrent((i) => (i + 1) % steps.length)
      }, INTERVAL)
      return () => clearInterval(timer)
    }, intervalOffset)
    return () => clearTimeout(delay)
  }, [steps.length, intervalOffset])

  const step = steps[current]

  return (
    <div className="flex-1 flex flex-col min-h-0 min-w-0">
      {/* Panel header */}
      <div className="shrink-0 px-6 pb-3 text-center">
        <span className={`text-xs tracking-widest font-semibold ${accentLabel}`}>{label}</span>
      </div>

      {/* Slide */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className={`rounded-2xl overflow-hidden border ${accentBorder} shadow-[0_8px_40px_rgba(47,58,79,0.10)] bg-white flex flex-col`}>
              <img
                src={`${import.meta.env.BASE_URL}${step.img}`}
                alt={step.title}
                className="w-full max-h-[52vh] object-contain bg-bg-primary"
              />
              <div className="px-6 py-4 border-t border-neutral-100/8">
                <h2 className="text-base font-bold text-neutral-100 mb-0.5">{step.title}</h2>
                <p className="text-neutral-400 text-xs">{step.caption}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="shrink-0 pt-3 pb-2 flex flex-col items-center gap-2">
        <div className="w-36 h-0.5 bg-neutral-100/12 rounded-full overflow-hidden">
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            className={`h-full ${accentBar} rounded-full`}
          />
        </div>
        <div className="flex gap-1.5 items-center">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? `w-4 h-1.5 ${accentDotActive}`
                  : 'w-1.5 h-1.5 bg-neutral-100/25 hover:bg-neutral-100/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BoardPage() {
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
          <h1 className="text-2xl font-bold text-neutral-100 tracking-tight">AI 游戏 DM</h1>
        </div>
        <div className="w-24" />
      </div>

      {/* Two-panel carousel */}
      <div className="relative z-10 flex-1 flex gap-0 min-h-0 px-6 pt-3 pb-6">
        {/* Divider */}
        <div className="flex gap-5 w-full">
          <CarouselPanel
            label="AI 剧本杀 DM"
            steps={scriptSteps}
            accentBlue={true}
            intervalOffset={0}
          />
          <div className="w-px bg-neutral-100/8 shrink-0 self-stretch my-4" />
          <CarouselPanel
            label="谁是卧底 DM"
            steps={undercoverSteps}
            accentBlue={false}
            intervalOffset={2500}
          />
        </div>
      </div>
    </div>
  )
}
