import { ButtonProps } from '@mui/material/Button'
import { ReactNode } from 'react'

export interface FormButtonProps extends ButtonProps {
  icon?: ReactNode
  background?: string
  title: string
}
