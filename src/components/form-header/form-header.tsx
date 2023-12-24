import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { FormHeaderProps } from './form-header.types'

export const FormHeader = ({ title, icon }: FormHeaderProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} mb={2}>
      {icon}
      <Typography variant="h6" fontWeight="bold" fontSize="18px">
        {title}
      </Typography>
    </Stack>
  )
}
