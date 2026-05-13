'use client'

import { Suspense, lazy, useEffect, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  enabled?: boolean
}

export function SplineScene({ scene, className, enabled = true }: SplineSceneProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setShouldRender(false)
      return
    }

    let timeoutId: number | null = null
    let idleId: number | null = null

    const start = () => {
      timeoutId = window.setTimeout(() => setShouldRender(true), 250)
    }

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(start)
    } else {
      start()
    }

    return () => {
      if (timeoutId !== null) window.clearTimeout(timeoutId)
      if (idleId !== null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
    }
  }, [enabled])

  if (!shouldRender) {
    return <div className={className} aria-hidden="true" />
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
