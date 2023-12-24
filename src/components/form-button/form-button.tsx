import Button from '@mui/material/Button'
import { Stack } from '@mui/system'
import { FormButtonProps } from './form-button.types'

export const FormButton = (props: FormButtonProps) => {
  const { icon, background, title, ...buttonProps } = props

  return (
    <Button
      {...buttonProps}
      sx={{
        borderRadius: '32px',
        textTransform: 'none',
        padding: { lg: '10px 20px' },
        background,
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        {icon}
        {title}
      </Stack>
    </Button>
  )
}
