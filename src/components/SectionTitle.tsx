type SectionTitleProps = {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl text-gray-600 leading-relaxed">{title}</h2>
    </div>
  )
}
