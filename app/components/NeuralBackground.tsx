"use client"

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none"/>

    </div>
  )
}

