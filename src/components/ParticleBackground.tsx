import { useMemo } from 'react'

interface ParticleBackgroundProps {
  density?: number
}

const COLORS = [
  'rgba(124,183,255,0.35)',
  'rgba(141,223,195,0.35)',
  'rgba(255,201,122,0.30)',
  'rgba(124,183,255,0.20)',
  'rgba(141,223,195,0.20)',
]

const ANIMATIONS = ['floatBubble', 'floatBubbleSlow']

export default function ParticleBackground({ density = 18 }: ParticleBackgroundProps) {
  const dots = useMemo(() =>
    Array.from({ length: density }, (_, i) => ({
      left: `${5 + ((i * 31 + 7) % 90)}%`,
      top: `${5 + ((i * 17 + 13) % 90)}%`,
      size: 5 + (i % 5) * 3,
      color: COLORS[i % COLORS.length],
      animation: ANIMATIONS[i % ANIMATIONS.length],
      duration: 5 + (i % 6) * 1.5,
      delay: -(i * 1.3),
    })),
  [density])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            animation: `${dot.animation} ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
