import { Box, Button, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Stack } from '@mui/system'
import { TaskDeleteProps } from './task-delete.types'
import { TrashIcon } from './task-delete.icons'
import { Text } from './task-delete.constants'
import { useTask } from '../../../../../../../../context/task.context'

export const TaskDelete = ({ taskId, handleClose }: TaskDeleteProps) => {
  const theme = useTheme()
  const { deleteTask } = useTask()

  const handleDeleteTask = () => {
    deleteTask(taskId)
    handleClose()
  }

  return (
    <Stack direction="column" alignItems="center" gap={5} padding="8px 32px">
      <TrashIcon />
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography
          variant="h6"
          fontSize="24px"
          fontWeight="bold"
          align="center"
        >
          Delete Task?
        </Typography>
        <Typography
          variant="body1"
          fontSize="16"
          align="center"
          whiteSpace="pre-line"
          sx={{ color: theme.palette.grey[600] }}
        >
          {Text}
        </Typography>
      </Box>
      <Stack direction="row" width="100%" gap={2}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          sx={{
            borderRadius: '32px',
            textTransform: 'none',
            padding: '10px 20px',
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            borderRadius: '32px',
            textTransform: 'none',
            padding: '10px 20px',
            background: theme.palette.error.dark,
          }}
          onClick={handleDeleteTask}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  )
}
