import { Stack, Typography } from '@mui/material'
import { useTask } from '../../../../context/task.context'
import { RenderIf } from '../../../../utils/dom'
import { TaskEmpty } from './components/task-empty'
import { TaskItem } from './components/task-item'

export const TaskList = () => {
  const { tasks } = useTask()

  console.log(tasks)

  return (
    <Stack gap={1}>
      <Typography variant="h6" fontWeight="bold" fontSize="18px">
        Tasks
      </Typography>

      <RenderIf isTrue={!tasks.length}>
        <TaskEmpty />
      </RenderIf>

      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  )
}
