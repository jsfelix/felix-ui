import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import * as PrimitiveTabs from '@radix-ui/react-tabs'

type TabsRootProps = ComponentProps<typeof PrimitiveTabs.Root>

type TabsListProps = ComponentProps<typeof PrimitiveTabs.List>

type TabsContentProps = ComponentProps<typeof PrimitiveTabs.Content>

type TabsTriggerProps = ComponentProps<typeof PrimitiveTabs.Trigger>

const TabsRoot = ({ children, className, ...rest }: TabsRootProps) => {
  return (
    <PrimitiveTabs.Root
      className={twMerge('border border-neutral-200 rounded-md', className)}
      {...rest}
    >
      {children}
    </PrimitiveTabs.Root>
  )
}

const TabsList = ({ children, className, ...rest }: TabsListProps) => {
  return (
    <PrimitiveTabs.List
      className={twMerge(
        'border-b border-b-neutral-200 bg-primary-50',
        className,
      )}
      {...rest}
    >
      {children}
    </PrimitiveTabs.List>
  )
}

const TabsContent = ({ children, className, ...rest }: TabsContentProps) => {
  return (
    <PrimitiveTabs.Content
      className={twMerge('px-4 py-2', className)}
      {...rest}
    >
      {children}
    </PrimitiveTabs.Content>
  )
}

const TabsTrigger = ({ children, className, ...rest }: TabsTriggerProps) => {
  return (
    <PrimitiveTabs.Trigger
      className={twMerge(
        'px-4 py-2 hover:text-primary-600 data-[state=active]:font-semibold data-[state=active]:text-primary-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary-600 h-full',
        className,
      )}
      {...rest}
    >
      {children}
    </PrimitiveTabs.Trigger>
  )
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Content: TabsContent,
  Trigger: TabsTrigger,
}
