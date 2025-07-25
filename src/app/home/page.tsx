"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Card } from "@/components/Card"
import { MoodButton } from "@/components/MoodButton"
import { PageTitle } from "@/components/PageTitle"
import { SectionTitle } from "@/components/SectionTitle"
import { Button } from "@/components/Button"
import { moods } from "@/data/moods"

const Home = () => {
  const router = useRouter()
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (input.trim() && selectedMood) {
      setIsLoading(true)
      setIsDisabled(true)
      const params = new URLSearchParams({
        content: input,
        mood: selectedMood,
        timestamp: new Date().toISOString(),
      }).toString()

      setTimeout(() => {
        setIsLoading(false)
        router.push(`/advice?${params}`)
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
              selected={selectedMood === mood.id}
              onClick={() => setSelectedMood(mood.id)}
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
