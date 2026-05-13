'use client'

import { useEffect, useState } from 'react'
import { SpiralAnimation, type SpiralAnimationHandle } from '@/components/ui/spiral-animation'
import { useRef } from 'react'

type SpiralLoaderProps = {
  onEnter: () => void
  isReady: boolean
}

export function SpiralLoader({ onEnter, isReady }: SpiralLoaderProps) {
  const [startVisible, setStartVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const animationRef = useRef<SpiralAnimationHandle>(null)
  const completedRef = useRef(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setStartVisible(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  const handleEnter = () => {
    if (isExiting) return
    setIsExiting(true)

    const complete = () => {
      if (completedRef.current) return
      completedRef.current = true
      onEnter()
    }

    animationRef.current?.playExit(complete)
    window.setTimeout(complete, 1100)
  }

  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <SpiralAnimation ref={animationRef} />
      </div>

      <div
        className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-1500 ease-out ${
          startVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        {isReady ? (
          <button
            onClick={handleEnter}
            disabled={isExiting}
            className="animate-pulse text-2xl font-extralight uppercase tracking-[0.2em] text-white transition-all duration-700 hover:tracking-[0.3em]"
          >
            {isExiting ? 'Entering...' : 'Enter'}
          </button>
        ) : (
          <div className="text-sm font-light uppercase tracking-[0.35em] text-white/70">
            Loading...
          </div>
        )}
      </div>
    </div>
  )
}
