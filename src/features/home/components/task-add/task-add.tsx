import AddRoundedIcon from '@mui/icons-material/AddRounded'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { FormEvent, useState } from 'react'
import { useTask } from '../../../../context/task.context'

export const TaskAdd = () => {
  const { addTask } = useTask()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const theme = useTheme()

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title && description) {
      addTask(title, description)
      setTitle('')
      setDescription('')
    }
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
        <InsertDriveFileOutlinedIcon
          sx={{ color: theme.palette.grey[400], fontSize: '16px' }}
        />
        <Typography variant="h6" fontWeight="bold" fontSize="18px">
          Add a new Task
        </Typography>
      </Stack>

      <form onSubmit={handleAddTask}>
        <Stack direction="column" gap={2} alignItems="flex-end">
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            size="small"
            InputProps={{
              sx: {
                borderRadius: '28px',
                boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
              },
            }}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            value={description}
            size="small"
            multiline
            rows={4}
            InputProps={{
              sx: {
                borderRadius: '16px',
                boxShadow: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
              },
            }}
            onChange={e => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: '32px',
              textTransform: 'none',
              padding: '10px 20px',
              marginTop: '8px',
            }}
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <AddRoundedIcon sx={{ fontSize: '20px' }} />
              Add
            </Stack>
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
