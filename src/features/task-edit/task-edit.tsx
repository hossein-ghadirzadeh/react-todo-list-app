import DoneIcon from '@mui/icons-material/Done'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TextField } from '../../components/text-field'
import { Status, Task } from '../../types'
import { StatusSelect } from './components/status-select'
import { useTask } from '../../context/task.context'

const initialTask: Task = {
  id: 0,
  title: '',
  description: '',
  status: Status.TODO,
}

export const TaskEdit = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { taskId } = useParams()
  const { tasks, editTask } = useTask()
  const selectedTask =
    tasks.find((task: Task) => task.id === Number(taskId)) ?? initialTask
  const [task, setTask] = useState<Task>(selectedTask)

  const handleEditTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    editTask(task)
    navigate('/')
  }

  const handleChange = (key: keyof Task, value: string) => {
    setTask(prevTask => ({ ...prevTask, [key]: value }))
  }

  return (
    <Box
      mt={4}
      sx={{
        background: theme.palette.common.white,
        padding: '24px 32px',
        borderRadius: '16px',
        boxShadow: '0px 8px 48px -12px rgba(16, 24, 40, 0.15)',
      }}
    >
      <Stack direction="row" alignItems="center" gap={1} mb={2}>
        <EditOutlinedIcon
          sx={{ color: theme.palette.grey[400], fontSize: '16px' }}
        />
        <Typography variant="h6" fontWeight="bold" fontSize="18px">
          Edit Task
        </Typography>
      </Stack>

      <form onSubmit={handleEditTask}>
        <Stack direction="column" gap={2} alignItems="flex-end">
          <TextField
            label="Title"
            value={task.title}
            onChange={e => handleChange('title', e.target.value)}
          />
          <TextField
            label="Description"
            value={task.description}
            onChange={e => handleChange('description', e.target.value)}
            multiline
            rows={16}
          />
          <StatusSelect
            currentStatus={selectedTask.status}
            onChange={(status: Status) => {
              handleChange('status', status)
            }}
          />
          <Stack direction="row" width="100%" gap={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '32px',
                textTransform: 'none',
                padding: '10px 20px',
              }}
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <DoneIcon sx={{ fontSize: '20px' }} />
                Save Changes
              </Stack>
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: '32px',
                textTransform: 'none',
                padding: '10px 20px',
              }}
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  )
}
