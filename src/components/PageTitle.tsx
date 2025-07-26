interface PageTitleProps {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className="text-3xl font-bold text-gray-800 mb-4"> {title}</h1>
}
