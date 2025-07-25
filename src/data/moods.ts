import { Angry, Cloud, Frown, Meh, Smile, Zap } from "lucide-react"
import { Mood } from "@/types/mood"

export const moods: Mood[] = [
  {
    id: "sad",
    icon: Frown,
    label: "悲しい",
    color: "text-blue-500",
    bgColor: "bg-blue-50 hover:bg-blue-100",
  },
  {
    id: "angry",
    icon: Angry,
    label: "怒り",
    color: "text-red-500",
    bgColor: "bg-red-50 hover:bg-red-100",
  },
  {
    id: "anxious",
    icon: Zap,
    label: "不安",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    id: "confused",
    icon: Cloud,
    label: "モヤモヤ",
    color: "text-gray-500",
    bgColor: "bg-gray-50 hover:bg-gray-100",
  },
  {
    id: "neutral",
    icon: Meh,
    label: "普通",
    color: "text-purple-500",
    bgColor: "bg-purple-50 hover:bg-purple-100",
  },
  {
    id: "happy",
    icon: Smile,
    label: "嬉しい",
    color: "text-green-500",
    bgColor: "bg-green-50 hover:bg-green-100",
  },
]
