import { PageTitle } from "@/components/PageTitle"
import { SectionTitle } from "@/components/SectionTitle"

const Home = () => {
  return (
    <>
      <div className="text-center mb-12">
        <PageTitle title="気持ちを書いてAIと一緒に整理してみましょう" />
      </div>
      <SectionTitle title="今の気持ちに近いものを選んでください" />
      <SectionTitle title="今の気持ちを詳しく書いてみましょう" />
    </>
  )
}

export default Home
