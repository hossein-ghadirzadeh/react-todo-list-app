import AddRoundedIcon from '@mui/icons-material/AddRounded'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import { Box, Stack, useTheme } from '@mui/material'
import { FormEvent, useState } from 'react'
import { FormButton } from '../../../../components/form-button'
import { FormHeader } from '../../../../components/form-header'
import { TextField } from '../../../../components/text-field'
import {
  descriptionErrorMessage,
  titleErrorMessage,
} from '../../../../constants'
import { useTask } from '../../../../context/task.context'

export const TaskAdd = () => {
  const theme = useTheme()
  const { addTask } = useTask()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title.trim() !== '' && description.trim() !== '') {
      if (description.length > 100) {
        addTask(title, description)
        setTitle('')
        setDescription('')
        setTitleError(false)
        setDescriptionError(false)
      } else {
        setDescriptionError(true)
      }
    } else {
      setTitleError(title.trim() === '')
      setDescriptionError(description.trim() === '')
    }
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
          <InsertDriveFileOutlinedIcon
            sx={{ color: theme.palette.grey[400], fontSize: '16px' }}
          />
        }
        title="Add a new Task"
      />

      <form onSubmit={handleAddTask}>
        <Stack direction="column" gap={2} alignItems="flex-end">
          <TextField
            label="Title"
            value={title}
            onChange={e => {
              setTitle(e.target.value)
              setTitleError(false)
            }}
            error={titleError}
            helperText={titleError && titleErrorMessage}
          />
          <TextField
            label="Description"
            value={description}
            onChange={e => {
              setDescription(e.target.value)
              setDescriptionError(false)
            }}
            multiline
            rows={8}
            error={descriptionError}
            helperText={descriptionError && descriptionErrorMessage}
          />
          <FormButton
            type="submit"
            variant="contained"
            color="primary"
            icon={<AddRoundedIcon sx={{ fontSize: '20px' }} />}
            title="Add"
          />
        </Stack>
      </form>
    </Box>
  )
}
