"use client"
import { Card } from "@/components/card/Card"
import { CardTitle } from "@/components/card/CardTitle"
import { MoodIconBox } from "@/components/card/MoodIconBox"
import { PageTitle } from "@/components/PageTitle"
import { useMoodStore } from "@/store/moodStore"

const Result = () => {
  const { moodComment, icon: Icon, timestamp, color, bgColor } = useMoodStore()
  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <PageTitle title="AIからのアドバイス" />
        <p className="text-gray-600">あなたの気持ちを整理しました</p>
      </div>
      <div className="flex flex-col gap-8">
        <Card>
          <MoodIconBox icon={Icon} color={color} bgColor={bgColor} />
          <CardTitle title="あなたの気持ち" color="text-gray-800" />
          <p className="text-gray-600">気持ち: {moodComment}</p>
          <p className="text-gray-600">
            記録時間: {new Date(timestamp).toLocaleString("ja-JP")}
          </p>
        </Card>
        <Card>
          <CardTitle title="AIからのアドバイス" color="text-purple-800" />
        </Card>
        <Card>
          <CardTitle title="おすすめのアクション" color="text-gray-800" />
        </Card>
      </div>
    </div>
  )
}
export default Result
