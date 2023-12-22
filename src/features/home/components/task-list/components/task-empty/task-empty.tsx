import { Box, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Text } from './task-empty.constants'
import { Icon } from './task-empty.icons'

export const TaskEmpty = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '220px',
        background: theme.palette.common.white,
        borderRadius: '16px',
        boxShadow: '0px 8px 48px -12px rgba(16, 24, 40, 0.15)',
      }}
    >
      <Stack direction="column" alignItems="center" gap={1}>
        <Icon />
        <Typography
          variant="body1"
          fontSize="14px"
          align="center"
          sx={{ color: theme.palette.grey[600], whiteSpace: 'pre-line' }}
        >
          {Text}
        </Typography>
      </Stack>
    </Box>
  )
}
