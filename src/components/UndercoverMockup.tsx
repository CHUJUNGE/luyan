import { motion } from 'framer-motion'
import { ShieldQuestion, Lock } from 'lucide-react'

export default function UndercoverMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#F2F8F4] border border-[#8DDFC3]/25 shadow-[0_8px_32px_rgba(141,223,195,0.15)] font-sans select-none">

      {/* ── Feishu DM title bar ── */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#E5F5EE] border-b border-[#8DDFC3]/20">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#8DDFC3]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#8DDFC3]/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#8DDFC3]/50" />
        </div>
        <div className="flex items-center gap-1.5 ml-1">
          <Lock size={9} className="text-[#6E7A8F]" />
          <span className="text-[10px] text-[#6E7A8F] font-mono tracking-widest uppercase">私信 · Private Message</span>
        </div>
      </div>

      {/* ── Chat area ── */}
      <div className="px-4 pt-5 pb-5 space-y-4">

        {/* System hint */}
        <div className="flex justify-center">
          <span className="text-[10px] text-[#8DDFC3]/80 bg-[#8DDFC3]/10 px-3 py-1 rounded-full border border-[#8DDFC3]/15 tracking-wide">
            游戏即将开始 · 身份已私密分配
          </span>
        </div>

        {/* Bot message row */}
        <div className="flex items-start gap-3">
          {/* Lobster avatar */}
          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#8DDFC3] to-[#5DC4A0] flex items-center justify-center shadow-sm text-[18px] leading-none">
            🦞
          </div>

          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] text-[#6E7A8F] font-medium">龙虾</span>

            {/* Chat bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm px-3 pt-3 pb-2.5 shadow-sm border border-[#8DDFC3]/15 max-w-[220px]">
              <p className="text-[11px] text-[#2F3A4F] mb-2.5 leading-relaxed">
                游戏开始了！这是你的专属身份卡，请保密 🤫
              </p>

              {/* Identity card */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 180 }}
                className="rounded-xl overflow-hidden border border-[#8DDFC3]/30 shadow-[0_4px_16px_rgba(141,223,195,0.2)]"
              >
                {/* Card header */}
                <div className="bg-gradient-to-r from-[#8DDFC3] to-[#6DD4B0] px-3 py-2 flex items-center gap-1.5">
                  <ShieldQuestion size={12} className="text-white/90" strokeWidth={2.5} />
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase">谁是卧底</span>
                  <div className="ml-auto w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">?</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-gradient-to-b from-[#EDF9F4] to-[#F5FCF9] px-4 py-3 flex flex-col items-center gap-2">
                  <span className="text-[9px] text-[#6E7A8F] tracking-widest uppercase font-medium">你的词语</span>
                  <div className="relative">
                    <div className="bg-white border-2 border-[#8DDFC3]/40 rounded-xl px-6 py-2.5 shadow-[0_2px_12px_rgba(141,223,195,0.25)]">
                      <span className="text-[22px] font-bold text-[#2F3A4F] tracking-widest">苹果</span>
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#8DDFC3] flex items-center justify-center shadow-sm">
                      <Lock size={7} className="text-white" />
                    </div>
                  </div>
                  <p className="text-[8.5px] text-[#6E7A8F] text-center leading-relaxed mt-0.5">
                    请不要透露这个词语<br />
                    <span className="text-[#8DDFC3] font-medium">只有你能看到</span>
                  </p>
                </div>

                {/* Card footer */}
                <div className="bg-[#E5F5EE] border-t border-[#8DDFC3]/15 px-3 py-1.5 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8DDFC3] animate-pulse" />
                  <span className="text-[8.5px] text-[#5DC4A0] font-medium">由 龙虾 私密派发</span>
                </div>
              </motion.div>
            </div>

            {/* Timestamp */}
            <span className="text-[9px] text-[#6E7A8F]/60 pl-1">14:23</span>
          </div>
        </div>

        {/* Receiver's ack */}
        <div className="flex justify-end">
          <div className="flex flex-col items-end gap-1">
            <div className="bg-[#8DDFC3]/20 border border-[#8DDFC3]/25 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[140px]">
              <p className="text-[11px] text-[#2F3A4F]">收到了，不说不说 😶</p>
            </div>
            <span className="text-[9px] text-[#6E7A8F]/60 pr-1">14:23</span>
          </div>
          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#EAF4FF] border border-[#7CB7FF]/20 flex items-center justify-center ml-3 text-[16px] leading-none">
            👤
          </div>
        </div>

      </div>
    </div>
  )
}
