import React from "react"
import { Mood } from "@/types/mood"

interface MoodButtonProps {
  mood: Mood
  selected: boolean
  onClick: (id: string) => void
  disabled?: boolean
}

export const MoodButton = ({
  mood,
  selected,
  onClick,
  disabled = false,
}: MoodButtonProps) => {
  const Icon = mood.icon
  return (
    <button
      type="button"
      className={`
        flex flex-col items-center justify-center rounded-2xl border-2 p-6 text-base font-medium
        transition-all duration-200
        ${
          selected
            ? `border-purple-300 ring-2 ring-purple-200 scale-105 ${mood.bgColor}`
            : `border-gray-200 ${mood.bgColor} hover:ring-2 hover:ring-gray-100`
        }
      `}
      onClick={() => onClick(mood.id)}
      disabled={disabled}
      aria-pressed={selected}
    >
      <span className={`mb-1 text-3xl ${mood.color}`}>
        <Icon />
      </span>
      <span className={`text-sm font-medium ${mood.color}`}>{mood.label}</span>
    </button>
  )
}
