import { Card } from "@/components/Card"
import { PageTitle } from "@/components/PageTitle"
import { SectionTitle } from "@/components/SectionTitle"

const Home = () => {
  return (
    <div className="container mx-auto px-8 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <PageTitle title="気持ちを書いてAIと一緒に整理してみましょう" />
      </div>
      <Card>
        <SectionTitle title="今の気持ちに近いものを選んでください" />
        <SectionTitle title="今の気持ちを詳しく書いてみましょう" />
      </Card>
    </div>
  )
}

export default Home
