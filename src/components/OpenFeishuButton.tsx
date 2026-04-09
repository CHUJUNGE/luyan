import { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import GlowButton from './GlowButton'
import FallbackDialog from './FallbackDialog'
import { openFeishuGroup } from '../lib/feishu'

interface OpenFeishuButtonProps {
  variant?: 'primary' | 'secondary'
  label?: string
}

export default function OpenFeishuButton({
  variant = 'primary',
  label = '打开飞书群聊',
}: OpenFeishuButtonProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleClick() {
    const success = await openFeishuGroup()
    if (!success) {
      setDialogOpen(true)
    }
  }

  return (
    <>
      <GlowButton variant={variant} onClick={handleClick}>
        <MessageSquare size={16} />
        {label}
      </GlowButton>
      <FallbackDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onRetry={() => setDialogOpen(false)}
        copied={copied}
        onCopied={setCopied}
      />
    </>
  )
}
