"use client"

import dynamic from "next/dynamic"

const LottiePlayer = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then(
      mod => mod.Player
    ),
  { ssr: false }
)

export default function LottieBackground() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center translate-y-52">
      <LottiePlayer
        autoplay
        loop
        src="/lottie/ai-brain.json"
        style={{ width: "150%", height: "100%" }}
      />
    </div>
  )
}
