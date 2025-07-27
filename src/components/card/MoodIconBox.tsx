import { LucideIcon } from "lucide-react"

interface MoodIconBoxProps {
  icon: LucideIcon
  color: string
  bgColor: string
}

export const MoodIconBox = ({ icon, color, bgColor }: MoodIconBoxProps) => {
  const Icon = icon
  return (
    <div className={`p-3 rounded-xl ${bgColor}`}>
      <span className={`w-6 h-6 ${color}`}>
        <Icon />
      </span>
    </div>
  )
}
