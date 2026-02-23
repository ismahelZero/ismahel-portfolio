import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    let animationFrameId

    // 1. Setup Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Optimized for high refresh rate

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }

    // 2. Invisible Plane for accurate 3D Mouse Tracking
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000)
    const planeMaterial = new THREE.MeshBasicMaterial({ visible: false })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    scene.add(plane)

    // 3. Setup Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)
    const basePositions = new Float32Array(particlesCount * 3)
    const randomOffsets = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount; i++) {
      // Spread particles across a wide area
      const x = (Math.random() - 0.5) * 120
      const y = (Math.random() - 0.5) * 120
      const z = (Math.random() - 0.5) * 80

      posArray[i * 3] = x
      posArray[i * 3 + 1] = y
      posArray[i * 3 + 2] = z

      // Remember starting positions to snap back to
      basePositions[i * 3] = x
      basePositions[i * 3 + 1] = y
      basePositions[i * 3 + 2] = z

      // Random phase for organic movement
      randomOffsets[i] = Math.random() * Math.PI * 2
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const material = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x06b6d4, // Tailwind cyan-500
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, material)
    scene.add(particles)

    // 4. Mouse Tracking Variables
    const mouse = new THREE.Vector2(999, 999)
    const target3D = new THREE.Vector3(999, 999, 0)
    const raycaster = new THREE.Raycaster()

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const handleMouseLeave = () => {
      mouse.x = 999
      mouse.y = 999
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const clock = new THREE.Clock()

    // 5. Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Update Raycaster to find exactly where the mouse is in the 3D world
      if (mouse.x !== 999) {
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObject(plane)
        if (intersects.length > 0) {
          target3D.copy(intersects[0].point)
        }

        // Dynamic Camera Parallax (Swings the whole view)
        camera.position.x += (mouse.x * 8 - camera.position.x) * 0.05
        camera.position.y += (mouse.y * 8 - camera.position.y) * 0.05
      } else {
        // Return camera to center if mouse leaves
        camera.position.x += (0 - camera.position.x) * 0.05
        camera.position.y += (0 - camera.position.y) * 0.05
      }
      camera.lookAt(scene.position)

      // Animate every single particle
      const positions = particlesGeometry.attributes.position.array

      for (let i = 0; i < particlesCount; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2

        const bx = basePositions[ix]
        const by = basePositions[iy]
        const bz = basePositions[iz]

        // Calculate 3D distance from particle to the mouse cursor
        const dx = target3D.x - bx
        const dy = target3D.y - by
        const dz = target3D.z - bz
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        // 1. Default Animation: Aggressive organic floating (Sine/Cosine waves)
        const floatY = Math.sin(elapsedTime * 1.5 + randomOffsets[i]) * 2.0
        const floatX = Math.cos(elapsedTime * 1.0 + randomOffsets[i]) * 1.0

        let destX = bx + floatX
        let destY = by + floatY
        let destZ = bz

        // 2. Swarm Animation: If mouse is near, override floating and pull towards cursor
        if (mouse.x !== 999 && dist < 15) {
          const force = (15 - dist) / 15 // The closer it is, the stronger the pull
          destX += dx * force * 0.8
          destY += dy * force * 0.8
          destZ += dz * force * 0.8
        }

        // Apply smooth easing to final calculated destination
        positions[ix] += (destX - positions[ix]) * 0.1
        positions[iy] += (destY - positions[iy]) * 0.1
        positions[iz] += (destZ - positions[iz]) * 0.1
      }

      // Tell Three.js to redraw the particles
      particlesGeometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
    }

    animate()

    // 6. Resize & Cleanup
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      // Dispose geometry to prevent memory leaks
      particlesGeometry.dispose()
      material.dispose()
      planeGeometry.dispose()
      planeMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 z-0 opacity-80" />
}

export default ThreeBackground
