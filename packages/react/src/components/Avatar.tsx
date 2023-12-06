import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import * as PrimitiveAvatar from '@radix-ui/react-avatar'

type AvatarRootProps = ComponentProps<typeof PrimitiveAvatar.Root>

type AvatarImageProps = ComponentProps<typeof PrimitiveAvatar.Image>

type AvatarFallbackProps = ComponentProps<typeof PrimitiveAvatar.Fallback>

const AvatarRoot = ({ children }: AvatarRootProps) => {
  return (
    <PrimitiveAvatar.Root className="rounded-full inline-block w-12 h-12 overflow-hidden">
      {children}
    </PrimitiveAvatar.Root>
  )
}

const AvatarImage = ({ className, ...rest }: AvatarImageProps) => {
  return (
    <PrimitiveAvatar.Image
      className={twMerge('w-full h-full object-cover rounded-full', className)}
      {...rest}
    />
  )
}

const AvatarFallback = ({ children }: AvatarFallbackProps) => {
  return (
    <PrimitiveAvatar.Fallback className="w-full h-full flex items-center justify-center bg-neutral-300 text-neutral-700">
      {children}
    </PrimitiveAvatar.Fallback>
  )
}

export function Avatar(props: AvatarImageProps) {
  return (
    <AvatarRoot>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User size={20} />
      </AvatarFallback>
    </AvatarRoot>
  )
}
