// BrainEnergyCanvas.tsx
"use client"

import { useEffect, useRef } from "react"

export default function BrainEnergyCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    let t = 0

    const lines = Array.from({ length: 70 }, () => ({
      angle: Math.random() * Math.PI * 2,
      offset: Math.random() * 100,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2

      ctx.lineWidth = 1
      ctx.strokeStyle = "rgba(96,165,250,0.35)"
      ctx.shadowColor = "rgba(96,165,250,0.9)"
      ctx.shadowBlur = 12

      lines.forEach(l => {
        ctx.beginPath()
        for (let r = 0; r < 600; r += 6) {
          const wave = Math.sin(r * 0.04 + t + l.offset) * 6
          const x = cx + Math.cos(l.angle) * (r + wave)
          const y = cy + Math.sin(l.angle) * (r + wave)
          r === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      t += 0.015
      requestAnimationFrame(draw)
    }

    draw()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 z-20 pointer-events-none"
    />
  )
}
