import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

interface ParticleBackgroundProps {
  density?: number
}

export default function ParticleBackground({ density = 40 }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: density, density: { enable: true, width: 1200 } },
          color: { value: ['#4F72C9', '#6EA8FF', '#8FD6FF', '#B8BFD9'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.05, max: 0.35 },
            animation: { enable: true, speed: 0.4, sync: false },
          },
          size: {
            value: { min: 1, max: 2.5 },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            distance: 140,
            color: '#4F72C9',
            opacity: 0.07,
            width: 1,
          },
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: { distance: 120, links: { opacity: 0.15 } },
          },
        },
      }}
    />
  )
}
