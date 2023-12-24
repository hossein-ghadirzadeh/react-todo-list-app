import DoneIcon from '@mui/icons-material/Done'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Box, Stack, useTheme } from '@mui/material'
import { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormButton } from '../../components/form-button'
import { FormHeader } from '../../components/form-header'
import { TextField } from '../../components/text-field'
import { useTask } from '../../context/task.context'
import { Status, Task } from '../../types'
import { StatusSelect } from './components/status-select'
import { initialTaskForEdit } from './task-edit.types'

export const TaskEdit = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { taskId } = useParams()
  const { tasks, editTask } = useTask()
  const selectedTask =
    tasks.find((task: Task) => task.id === Number(taskId)) ?? initialTaskForEdit
  const [task, setTask] = useState<Task>(selectedTask)

  const getIsFormValid = () => {
    return task.title && task.description
  }

  const handleEditTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    editTask(task)
    navigate('/')
    setTask(initialTaskForEdit)
  }

  const handleChange = (key: keyof Task, value: string) => {
    setTask(prevTask => ({ ...prevTask, [key]: value }))
  }

  return (
    <Box
      mt={4}
      padding="24px 32px"
      borderRadius="16px"
      boxShadow="0px 8px 48px -12px rgba(16, 24, 40, 0.15)"
      sx={{
        background: theme.palette.common.white,
      }}
    >
      <FormHeader
        icon={
          <EditOutlinedIcon
            sx={{ color: theme.palette.grey[400], fontSize: '16px' }}
          />
        }
        title="Edit Task"
      />

      <form onSubmit={handleEditTask}>
        <Stack direction="column" gap={2}>
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
            <FormButton
              title="Save Changes"
              icon={<DoneIcon sx={{ fontSize: '20px' }} />}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!getIsFormValid()}
            />
            <FormButton
              title="Cancel"
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate('/')}
            />
          </Stack>
        </Stack>
      </form>
    </Box>
  )
}
