import Image from "next/image"
import Link from "next/link"
import { SERVICE_ICONS } from "@/lib/services.icons"
import { SERVICES } from "@/lib/services.data"

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:py-32 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white tracking-tight">
          Our Services
        </h1>

        <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-base leading-relaxed">
          Enterprise-grade AI services trusted by global teams building mission-critical machine learning systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.iconKey]
            const preset = service.visualPreset ?? "default"
            const overlayTone =
              preset === "medical"
                ? "bg-gradient-to-t from-emerald-950/85 via-slate-950/35 to-transparent"
                : preset === "lidar"
                  ? "bg-gradient-to-t from-violet-950/85 via-slate-950/35 to-transparent"
                  : "bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"
            const bulletGrid = service.bullets.length > 3

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full min-h-0 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
              >
                <div className="relative flex h-full min-h-0 flex-1 flex-col">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-15 group-hover:opacity-35 transition duration-500" />

                  <div
                    className="
                    relative flex h-full min-h-0 flex-1 flex-col rounded-2xl border border-white/20 p-6 md:p-8
                    bg-white/[0.06] backdrop-blur-md transition-all duration-300
                    group-hover:border-white/50 group-hover:bg-white/[0.09]
                  "
                  >
                    <div className="relative mb-5 h-32 md:h-40 rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                      <Image
                        src={service.heroImageUrl}
                        alt={service.heroImageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 360px"
                      />
                      <div className={`pointer-events-none absolute inset-0 ${overlayTone}`} />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-purple-700/15" />
                      <div className="absolute bottom-2 right-2 rounded-md bg-black/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                        View
                      </div>
                    </div>

                    <Icon
                      className="w-9 h-9 md:w-10 md:h-10 text-blue-300 mb-3 group-hover:scale-105 transition-transform shrink-0"
                      aria-hidden
                    />

                    <h2 className="text-lg md:text-xl font-semibold text-white leading-snug mb-2 group-hover:text-blue-100 transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-blue-200/90 text-xs md:text-sm font-medium mb-3 leading-snug border-l-2 border-blue-400/70 pl-3 italic">
                      {service.subtitle}
                    </p>

                    <p className="text-white/85 min-h-0 flex-1 leading-relaxed text-sm mb-4 line-clamp-4 md:line-clamp-3">
                      {service.description}
                    </p>

                    <div
                      className={
                        bulletGrid
                          ? "grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto pt-4 border-t border-white/10"
                          : "space-y-2.5 mt-auto pt-4 border-t border-white/10"
                      }
                    >
                      {service.bullets.map((b) => (
                        <div
                          key={b.label}
                          className="rounded-lg bg-black/25 border border-white/5 px-3 py-2.5 text-left"
                        >
                          <p className="text-blue-200/95 text-xs font-semibold leading-tight mb-0.5">{b.label}</p>
                          <p className="text-white/70 text-[11px] md:text-xs leading-relaxed line-clamp-2">
                            {b.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
