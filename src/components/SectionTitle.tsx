type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl text-gray-600 leading-relaxed">{title}</h2>
    </div>
  )
}
