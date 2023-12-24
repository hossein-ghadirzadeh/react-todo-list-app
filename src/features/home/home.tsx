import { Stack } from '@mui/material'
import { TaskAdd } from './components/task-add'
import { TaskList } from './components/task-list'

export const Home = () => {
  return (
    <Stack direction="column" gap={3} mb={6}>
      <TaskAdd />
      <TaskList />
    </Stack>
  )
}
