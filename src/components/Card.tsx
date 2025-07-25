interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
      {children}
    </div>
  )
}
