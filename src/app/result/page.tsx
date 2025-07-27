import { Card } from "@/components/Card"
import { PageTitle } from "@/components/PageTitle"

const Result = () => {
  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <PageTitle title="AIからのアドバイス" />
        <p className="text-gray-600">あなたの気持ちを整理しました</p>
      </div>
      <div className="flex flex-col gap-8">
        <Card>あなたの気持ち</Card>
        <Card>AIからのアドバイス</Card>
        <Card>おすすめのアクション</Card>
      </div>
    </div>
  )
}
export default Result
