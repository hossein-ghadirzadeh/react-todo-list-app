import MUITextField, { TextFieldProps } from '@mui/material/TextField'

export const TextField = (props: TextFieldProps) => {
  const { multiline, ...textFieldProps } = props
  return (
    <MUITextField
      {...textFieldProps}
      multiline={multiline}
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        sx: {
          borderRadius: multiline ? '16px' : '28px',
          boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
        },
      }}
    />
  )
}
