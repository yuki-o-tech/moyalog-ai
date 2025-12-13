import { LucideIcon, Meh } from "lucide-react"
import { create } from "zustand"

interface MoodState {
  moodComment: string
  icon: LucideIcon
  timestamp: string
  color: string
  bgColor: string
  setMood: (
    moodComment: string,
    icon: LucideIcon,
    color: string,
    bgColor: string
  ) => void
  resetMood: () => void
}

export const useMoodStore = create<MoodState>((set) => ({
  moodComment: "",
  icon: Meh,
  timestamp: "",
  color: "",
  bgColor: "",
  setMood: (moodComment, icon, color = "", bgColor = "") =>
    set({
      moodComment,
      icon,
      timestamp: new Date().toISOString(),
      color,
      bgColor,
    }),
  resetMood: () =>
    set({
      moodComment: "",
      icon: Meh,
      timestamp: "",
      color: "",
      bgColor: "",
    }),
}))
