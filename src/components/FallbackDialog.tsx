import { motion, AnimatePresence } from 'framer-motion'
import { X, RefreshCw, Copy, ExternalLink } from 'lucide-react'
import { FEISHU_GROUP_WEB_URL, openFeishuGroup, copyFeishuLink } from '../lib/feishu'
import GlowButton from './GlowButton'

interface FallbackDialogProps {
  open: boolean
  onClose: () => void
  onRetry: () => void
  copied: boolean
  onCopied: (v: boolean) => void
}

export default function FallbackDialog({ open, onClose, onRetry, copied, onCopied }: FallbackDialogProps) {
  function handleCopy() {
    copyFeishuLink()
    onCopied(true)
    setTimeout(() => onCopied(false), 2000)
  }

  async function handleRetry() {
    onClose()
    await openFeishuGroup()
    onRetry()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="glass-card rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold text-neutral-100 mb-2">未能自动唤起飞书</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              请确认本机已安装并登录飞书，或使用下方备用入口进入指定群聊。
            </p>

            <div className="flex flex-col gap-3">
              <GlowButton onClick={handleRetry} variant="primary" className="w-full justify-center">
                <RefreshCw size={15} />
                再试一次
              </GlowButton>
              <GlowButton onClick={handleCopy} variant="secondary" className="w-full justify-center">
                <Copy size={15} />
                {copied ? '已复制' : '复制群链接'}
              </GlowButton>
              <GlowButton
                onClick={() => window.open(FEISHU_GROUP_WEB_URL, '_blank')}
                variant="secondary"
                className="w-full justify-center"
              >
                <ExternalLink size={15} />
                打开网页入口
              </GlowButton>
              <button
                onClick={onClose}
                className="text-center text-neutral-400 text-sm hover:text-neutral-300 transition-colors py-1"
              >
                关闭
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
