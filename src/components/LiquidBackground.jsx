import React, { useEffect, useRef } from 'react'

const LiquidBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // 1. Setup Canvas Size
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    // 2. Mouse Tracking
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // 3. Floating ambient background blobs
    const ambientBlobs = Array.from({ length: 15 }).map((_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 80 + 40,
      color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6',
    }))

    // 4. Snake / Trailer Configuration
    const SNAKE_LENGTH = 35 // How long the tail is
    const HEAD_RADIUS = 35 // Size of the cursor (head)
    const TAIL_RADIUS = 2 // Size of the very tip of the tail

    // Create an array of points for the snake body
    const trail = Array.from({ length: SNAKE_LENGTH }).map(() => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }))

    // 5. Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // --- A. Update & Draw Ambient Blobs ---
      ambientBlobs.forEach((b) => {
        b.x += b.vx
        b.y += b.vy

        // Bounce off edges gently
        if (b.x < -b.radius) b.vx = Math.abs(b.vx)
        if (b.x > canvas.width + b.radius) b.vx = -Math.abs(b.vx)
        if (b.y < -b.radius) b.vy = Math.abs(b.vy)
        if (b.y > canvas.height + b.radius) b.vy = -Math.abs(b.vy)

        // Magnetic push: gently push blobs away from the snake's head
        const dx = trail[0].x - b.x
        const dy = trail[0].y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          b.x -= (dx / dist) * 1.5
          b.y -= (dy / dist) * 1.5
        }

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
        ctx.fillStyle = b.color
        ctx.fill()
      })

      // --- B. Update Snake Physics ---
      // 1. The Head smoothly follows the actual mouse
      trail[0].x += (mouse.x - trail[0].x) * 0.3
      trail[0].y += (mouse.y - trail[0].y) * 0.3

      // 2. The Body segments follow the segment right in front of them
      for (let i = 1; i < SNAKE_LENGTH; i++) {
        // The lower the multiplier, the "looser" and longer the snake feels
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.4
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.4
      }

      // --- C. Draw Snake ---
      // We draw from tail to head so the head overlaps perfectly
      for (let i = SNAKE_LENGTH - 1; i >= 0; i--) {
        const p = trail[i]

        // Calculate taper (radius gets smaller towards the tail)
        const progress = i / SNAKE_LENGTH
        const radius = HEAD_RADIUS - (HEAD_RADIUS - TAIL_RADIUS) * progress

        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(radius, 0.1), 0, Math.PI * 2)
        ctx.fillStyle = '#06b6d4' // Cyan snake
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // 6. Cleanup
    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Magic SVG Filter that melts the snake circles together into a smooth liquid shape */}
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

      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{ filter: 'url(#goo)' }}
      />
    </>
  )
}

export default LiquidBackground
