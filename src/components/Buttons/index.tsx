interface ButtonProps {
  children?: React.ReactNode
  onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <button>{children}</button>
}
