import React, { useEffect, useRef } from 'react'

const LiquidBackground = () => {
  const canvasRef = useRef(null)

  // Detect mobile once for CSS rendering
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // 1. Setup Canvas Size (1:1 Resolution for crispness)
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    // 2. Performance Optimization: Fewer blobs on mobile
    const BLOB_COUNT = isMobile ? 6 : 15
    const SNAKE_LENGTH = isMobile ? 12 : 35

    // 3. Interaction State
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let isActive = !isMobile // Desktop always active, mobile starts invisible
    let currentHeadRadius = isActive ? 35 : 0
    const MAX_HEAD_RADIUS = 35
    const TAIL_RADIUS = 2

    const trail = Array.from({ length: SNAKE_LENGTH }).map(() => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }))

    // 4. Desktop Mouse
    const handleMouseMove = (e) => {
      isActive = true
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    // 5. Mobile Touch Events
    const handleTouchStart = (e) => {
      isActive = true
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY

        // If the snake was invisible, snap it immediately to the finger location
        if (currentHeadRadius < 5) {
          trail.forEach((t) => {
            t.x = mouse.x
            t.y = mouse.y
          })
        }
      }
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    const handleTouchEnd = () => {
      isActive = false // Trigger the shrink effect
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    // 6. Floating ambient background blobs (Sped up so they aren't stuck!)
    const ambientBlobs = Array.from({ length: BLOB_COUNT }).map((_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 1.5, // Faster movement
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * (isMobile ? 40 : 80) + (isMobile ? 25 : 40),
      color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6',
    }))

    // 7. Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smoothly grow or shrink the snake head based on touch state
      if (isActive) {
        currentHeadRadius += (MAX_HEAD_RADIUS - currentHeadRadius) * 0.15
      } else {
        currentHeadRadius += (0 - currentHeadRadius) * 0.1 // Shrink slowly on release
      }

      // --- A. Update & Draw Ambient Blobs ---
      ambientBlobs.forEach((b) => {
        b.x += b.vx
        b.y += b.vy

        // Bounce off walls
        if (b.x < -b.radius) b.vx = Math.abs(b.vx)
        if (b.x > canvas.width + b.radius) b.vx = -Math.abs(b.vx)
        if (b.y < -b.radius) b.vy = Math.abs(b.vy)
        if (b.y > canvas.height + b.radius) b.vy = -Math.abs(b.vy)

        // Magnetic push: move away from finger
        if (currentHeadRadius > 5) {
          const dx = trail[0].x - b.x
          const dy = trail[0].y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            b.x -= (dx / dist) * 1.5
            b.y -= (dy / dist) * 1.5
          }
        }

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        ctx.fillStyle = b.color

        // On mobile, without the SVG filter, a slight opacity makes them look like glowing orbs
        if (isMobile) {
          ctx.globalAlpha = 0.8
        }

        ctx.fill()
        ctx.globalAlpha = 1.0 // Reset alpha
      })

      // --- B. Update Snake Physics ---
      trail[0].x += (mouse.x - trail[0].x) * 0.3
      trail[0].y += (mouse.y - trail[0].y) * 0.3

      for (let i = 1; i < SNAKE_LENGTH; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.4
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.4
      }

      // --- C. Draw Snake (Only if it hasn't shrunk completely) ---
      if (currentHeadRadius > 0.1) {
        for (let i = SNAKE_LENGTH - 1; i >= 0; i--) {
          const p = trail[i]
          const progress = i / SNAKE_LENGTH
          const radius = currentHeadRadius - (currentHeadRadius - TAIL_RADIUS) * progress

          ctx.beginPath()
          ctx.arc(p.x, p.y, Math.max(radius, 0.1), 0, Math.PI * 2)
          ctx.fillStyle = '#06b6d4'
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // 8. Cleanup
    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* CRITICAL FIX: We only mount the heavy SVG filter on desktop.
        On mobile, the canvas runs raw, giving 60FPS flawless performance.
      */}
      {!isMobile && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -12"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
      )}

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          filter: isMobile ? 'none' : 'url(#goo)',
        }}
      />
    </>
  )
}

export default LiquidBackground
