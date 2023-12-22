import { ReactNode } from 'react'

export const RenderIf = ({
  children,
  isTrue,
}: {
  children: ReactNode
  isTrue: boolean
}) => {
  return isTrue ? children : null
}
