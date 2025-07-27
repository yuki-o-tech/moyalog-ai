interface CardTitleProps {
  title: React.ReactNode
  color?: string
}

export const CardTitle = ({ title, color }: CardTitleProps) => {
  return <h2 className={`text-xl font-bold  mb-4 ${color}`}>{title}</h2>
}
