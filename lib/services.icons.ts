import type { LucideIcon } from "lucide-react"
import { BoxSelect, Boxes, FileText, Layers, Mic2, Scale, Stethoscope, Video } from "lucide-react"
import type { ServiceIconKey } from "./services.data"

export const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  boxSelect: BoxSelect,
  stethoscope: Stethoscope,
  boxes: Boxes,
  video: Video,
  fileText: FileText,
  mic2: Mic2,
  scale: Scale,
  layers: Layers,
}
