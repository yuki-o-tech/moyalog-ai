"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Card } from "@/components/card/Card"
import { MoodButton } from "@/components/MoodButton"
import { PageTitle } from "@/components/PageTitle"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/Button"
import { moods } from "@/data/moods"
import { useMoodStore } from "@/store/moodStore"
import { LucideIcon } from "lucide-react"

const Home = () => {
  const router = useRouter()
  const { setMood } = useMoodStore()
  const [selectedMood, setSelectedMood] = useState<{
    icon: LucideIcon
    color: string
    bgColor: string
  } | null>(null)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (input.trim() && selectedMood) {
      setIsLoading(true)

      setMood(
        input,
        selectedMood.icon,
        selectedMood.color,
        selectedMood.bgColor
      )

      setTimeout(() => {
        router.push("/result")
      }, 2000)
    }
  }

  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <PageTitle title="気持ちを書いてAIと一緒に整理してみましょう" />
      </div>
      <Card>
        <SectionTitle title="今の気持ちに近いものを選んでください" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {moods.map((mood) => (
            <MoodButton
              key={mood.id}
              mood={mood}
              selected={selectedMood?.icon === mood.icon}
              onClick={() =>
                setSelectedMood({
                  icon: mood.icon,
                  color: mood.color,
                  bgColor: mood.bgColor,
                })
              }
              disabled={isLoading}
            />
          ))}
        </div>
        <div className="mb-8">
          <SectionTitle title="今の気持ちを詳しく書いてみましょう" />
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="モヤモヤ、つらさ、不安、嬉しさなど、どんな気持ちでも自由に書いてください。具体的な出来事や状況も一緒に書いていただけると、より良いアドバイスができます。"
          className="w-full h-64 p-6 border-2 border-gray-200 rounded-2xl resize-none focus:border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 placeholder-gray-400 leading-relaxed text-lg"
          disabled={isLoading}
        />
        <div className="flex justify-center mt-8">
          <Button
            label="AIに相談する"
            isLoading={isLoading}
            isDisabled={!input.trim() || !selectedMood || isLoading}
            handleSubmit={handleSubmit}
          />
        </div>
      </Card>
    </div>
  )
}

export default Home
