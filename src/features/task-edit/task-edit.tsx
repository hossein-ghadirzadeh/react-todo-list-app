import DoneIcon from '@mui/icons-material/Done'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField } from '../../components/text-field'
import { Status } from '../../types'
import { StatusSelect } from './components/status-select'

export const TaskEdit = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const theme = useTheme()
  const navigate = useNavigate()

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

      <form>
        <Stack direction="column" gap={2} alignItems="flex-end">
          <TextField
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            multiline
            rows={16}
          />
          <StatusSelect
            currentStatus={Status.TODO}
            onChange={(status: Status) => {
              console.log('status:', status)
            }}
          />
          <Stack direction="row" width="100%" gap={2}>
            <Button
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
