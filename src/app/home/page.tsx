"use client"
import { useState } from "react"

import { Card } from "@/components/Card"
import { MoodButton } from "@/components/MoodButton"
import { PageTitle } from "@/components/PageTitle"
import { SectionTitle } from "@/components/SectionTitle"
import { moods } from "@/data/moods"

const Home = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
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
      </Card>
    </div>
  )
}

export default Home
