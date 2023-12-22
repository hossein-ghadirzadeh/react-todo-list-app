import { Container, Stack } from '@mui/material'
import { TaskAdd } from './components/task-add'
import { TaskList } from './components/task-list'

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <Stack direction="column" gap={3}>
        <TaskAdd
          onAddTask={function (title: string, description: string): void {
            console.log(title, description)
          }}
        />
        <TaskList />
      </Stack>
    </Container>
  )
}
