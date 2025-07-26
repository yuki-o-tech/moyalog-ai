import { Loader2 } from "lucide-react"

interface ButtonProps {
  label: string
  isLoading: boolean
  isDisabled?: boolean
  handleSubmit: () => void
}

export const Button = ({
  label,
  isLoading,
  isDisabled,
  handleSubmit,
}: ButtonProps) => {
  return (
    <button
      onClick={handleSubmit}
      disabled={isDisabled}
      className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold py-4 px-12 rounded-2xl disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-6 h-6 animate-spin" />
        </>
      ) : (
        label
      )}
    </button>
  )
}
