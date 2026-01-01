"use client"

export default function AIBackgroundImages() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">

      <div className="absolute top-16 left-16 w-[260px] rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
        <img src="/ai/brain.jpg" className="rounded-2xl" />
      </div>

      <div className="absolute bottom-16 right-16 w-[260px] rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
        <img src="/ai/chip.jpg" className="rounded-2xl" />
      </div>

    </div>
  )
}

