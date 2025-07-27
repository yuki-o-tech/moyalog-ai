import { Card } from "@/components/card/Card"
import { CardTitle } from "@/components/card/CardTitle"
import { PageTitle } from "@/components/PageTitle"

const Result = () => {
  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <PageTitle title="AIからのアドバイス" />
        <p className="text-gray-600">あなたの気持ちを整理しました</p>
      </div>
      <div className="flex flex-col gap-8">
        <Card>
          <CardTitle title="あなたの気持ち" color="text-gray-800" />
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
