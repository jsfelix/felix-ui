import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'px-6 py-3 min-w-[120px] rounded-md bg-primary-600 text-primary-100 font-semibold hover:bg-primary-700 transition-colors',
        className,
      )}
    >
      {children}
    </button>
  )
}
