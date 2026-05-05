import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services.data"
import { SERVICE_ICONS } from "@/lib/services.icons"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service | DeepAnnotation" }
  return {
    title: `${service.title} | DeepAnnotation`,
    description: `${service.subtitle} ${service.description}`.slice(0, 160),
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = SERVICE_ICONS[service.iconKey]
  const preset = service.visualPreset ?? "default"
  const heroOverlay =
    preset === "medical"
      ? "bg-gradient-to-t from-emerald-950/90 via-slate-950/50 to-slate-950/20"
      : preset === "lidar"
        ? "bg-gradient-to-t from-violet-950/90 via-slate-950/50 to-slate-950/20"
        : "bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"

  return (
    <article className="min-h-screen bg-transparent text-white pb-24">
      <div className="relative w-full min-h-[42vh] md:min-h-[50vh]">
        <Image
          src={service.heroImageUrl}
          alt={service.heroImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${heroOverlay}`} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-800/25" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl pt-28 md:pt-36 pb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            All services
          </Link>
          <Icon className="w-12 h-12 md:w-14 md:h-14 text-blue-200 mb-4" aria-hidden />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-lg max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100/95 max-w-3xl leading-relaxed font-medium italic border-l-4 border-blue-400/80 pl-4">
            {service.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl -mt-4 relative z-20">
        <div className="rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-md p-6 md:p-10 shadow-2xl">
          <p className="text-white/90 text-base md:text-lg leading-relaxed whitespace-pre-line">{service.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mt-16 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Capabilities</h2>
        <p className="text-white/55 text-sm text-center md:text-left mb-10 md:mb-12 max-w-2xl">
          Each capability pairs illustrative imagery with how we deliver it at production quality.
        </p>

        <div className="flex flex-col gap-16 md:gap-20">
          {service.bullets.map((b, i) => {
            const imageOnRight = i % 2 === 1
            return (
              <section
                key={b.label}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  i > 0 ? "pt-16 md:pt-20 border-t border-white/10" : ""
                }`}
              >
                <div className={imageOnRight ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-xl">
                    <Image
                      src={b.imageUrl}
                      alt={b.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
                <div className={imageOnRight ? "lg:order-1" : ""}>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{b.label}</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{b.detail}</p>
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to services
          </Link>
        </div>
      </div>
    </article>
  )
}
