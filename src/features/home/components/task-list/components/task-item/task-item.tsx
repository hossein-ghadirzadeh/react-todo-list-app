import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Box, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { StatusChip } from './components/status-badge'
import { TaskMenu } from './components/task-menu'
import { TaskItemProps } from './task-item.types'

export const TaskItem = ({ task }: TaskItemProps) => {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: theme.palette.common.white,
          borderRadius: '16px',
          boxShadow: '0px 8px 48px -12px rgba(16, 24, 40, 0.15)',
          padding: '16px 24px',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" fontWeight="bold" fontSize="16px">
            {task.title}
          </Typography>
          <Stack direction="row" alignItems="center">
            <StatusChip status={task.status} />
            <TaskMenu taskId={task.id} />
          </Stack>
        </Stack>
        <Stack direction="row" gap={0.5} alignItems="center">
          <AccessTimeIcon
            sx={{ color: theme.palette.grey[400], fontSize: '16px' }}
          />
          <Typography
            variant="subtitle1"
            fontSize="12px"
            color={theme.palette.grey[400]}
          >
            {`Created: ${task.createdAt}`}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          fontSize="14px"
          color={theme.palette.grey[600]}
          sx={{ wordWrap: 'break-word' }}
          mt={1}
        >
          {task.description}
        </Typography>
      </Box>
    </>
  )
}
