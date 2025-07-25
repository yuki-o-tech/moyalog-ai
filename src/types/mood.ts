import type { LucideIcon } from "lucide-react"

export interface Mood {
  id: string
  icon: LucideIcon
  label: string
  bgColor: string
  color?: string
}
