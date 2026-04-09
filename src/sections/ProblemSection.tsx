import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { MessageSquareDashed, Users, User, MessageSquareOff, UserRound, VolumeX, CloudOff } from 'lucide-react'
import { problems } from '../data/content'

const MASCOT = 'https://myclaw.ai/openclaw-mascot.svg'
const painIcons: ElementType[] = [MessageSquareOff, UserRound, VolumeX]

export default function ProblemSection() {
  return (
    <section id="problems" className="relative py-24 px-6 bg-bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_40%,rgba(255,201,122,0.10)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: narrative + bullet pain points */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/12 border border-accent-orange/25 text-accent-orange text-xs tracking-widest mb-6 font-medium">
              <img src={MASCOT} alt="" className="w-4 h-4 object-contain" /> 我们想解决的问题
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 leading-snug mb-4">
              不是「没人说话」，<br className="hidden sm:block" />
              而是参与成本过高
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mb-10">
              工作群里不是没有人，也不是没有想法。但开口这件事，门槛却意外地高。
            </p>

            <div className="space-y-6">
              {problems.map((p, i) => {
                const PainIcon = painIcons[i]
                return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.13 + 0.25 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <PainIcon size={18} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-neutral-100 font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
              className="mt-10 text-neutral-300 text-sm border-l-2 border-accent-orange/50 pl-4 italic leading-relaxed"
            >
              所以我们真正要做的，不是更吵的群聊，<br />而是更容易参与的群聊。
            </motion.div>
          </motion.div>

          {/* Right: dead group-chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-accent-orange/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-accent-blue/8 blur-3xl pointer-events-none" />

            {/* Chat window */}
            <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-[0_16px_56px_rgba(47,58,79,0.12)] border border-neutral-100/60 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-bg-tertiary to-bg-secondary px-4 py-3.5 flex items-center gap-3 border-b border-neutral-100/40">
                <div className="w-9 h-9 rounded-full bg-accent-blue/15 flex items-center justify-center">
                  <Users size={16} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-neutral-100 text-sm font-semibold">某公司协作群</p>
                  <p className="text-neutral-400 text-xs">13 位成员</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300/50" />
                </div>
              </div>

              {/* Chat messages */}
              <div className="px-4 py-5 space-y-4 bg-[#F6F8FA] min-h-[290px]">
                {/* Old received message */}
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <User size={13} className="text-accent-blue" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm max-w-[78%]">
                    <p className="text-neutral-100 text-xs">今晚有空一起吃饭不</p>
                    <p className="text-neutral-400/70 text-[9px] mt-1 text-right">昨天 18:30</p>
                  </div>
                </div>

                {/* Silence gap */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-neutral-200/60" />
                  <span className="text-neutral-400/60 text-[9px] whitespace-nowrap tracking-wide">沉默了 16 小时</span>
                  <div className="flex-1 h-px bg-neutral-200/60" />
                </div>

                {/* Sent message trying to break silence */}
                <div className="flex justify-end">
                  <div className="bg-accent-blue/15 rounded-2xl rounded-br-sm px-3 py-2 max-w-[72%]">
                    <p className="text-neutral-100 text-xs">有人嘛？</p>
                    <p className="text-neutral-400/70 text-[9px] mt-1">今天 09:12</p>
                  </div>
                </div>

                {/* No reply indicator */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-1.5 bg-neutral-200/50 rounded-full px-3 py-1.5">
                    <MessageSquareDashed size={10} className="text-neutral-400" />
                    <span className="text-neutral-400 text-[9px]">没有人回复…</span>
                  </div>
                </div>

                {/* Faded typing indicator */}
                <div className="flex items-end gap-2 opacity-30">
                  <div className="w-7 h-7 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <User size={13} className="text-neutral-400" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm">
                    <div className="flex gap-1 items-center h-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating sticker */}
            <motion.div
              animate={{ rotate: [-2, 2, -2], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-2 -left-3 bg-accent-orange/15 border border-accent-orange/30 rounded-xl px-3 py-1.5 text-xs text-accent-orange font-semibold shadow-sm flex items-center gap-1.5"
            >
              <CloudOff size={12} className="text-accent-orange" /> 冷场中…
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
