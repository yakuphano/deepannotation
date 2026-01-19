export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-slate-950">
      {/* Video Katmanı */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/backroundvideo.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Karartma Perdesi (Yazıların okunması için şart) */}
      <div className="absolute inset-0 bg-slate-950/70"></div>
    </div>
  )
}