"use client"
import { useState } from "react"

import { Card } from "@/components/Card"
import { MoodButton } from "@/components/MoodButton"
import { PageTitle } from "@/components/PageTitle"
import { SectionTitle } from "@/components/SectionTitle"
import { moods } from "@/data/moods"

const Home = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <PageTitle title="気持ちを書いてAIと一緒に整理してみましょう" />
      </div>
      <Card>
        <SectionTitle title="今の気持ちに近いものを選んでください" />{" "}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
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
        <SectionTitle title="今の気持ちを詳しく書いてみましょう" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="モヤモヤ、つらさ、不安、嬉しさなど、どんな気持ちでも自由に書いてください。具体的な出来事や状況も一緒に書いていただけると、より良いアドバイスができます。"
          className="w-full h-64 p-6 border-2 border-gray-200 rounded-2xl resize-none focus:border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-100 transition-all duration-200 text-gray-700 placeholder-gray-400 leading-relaxed text-lg"
          disabled={isLoading}
        />
      </Card>
    </div>
  )
}

export default Home
