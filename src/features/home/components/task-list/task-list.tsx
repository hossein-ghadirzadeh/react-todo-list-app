import { Stack, Typography } from '@mui/material'
import { RenderIf } from '../../../../utils/dom'
import { useState } from 'react'
import { TaskEmpty } from './components/task-empty'
import { TaskItem } from './components/task-item'
import { Status, Task } from '../../../../types'

export const TaskList = () => {
  const [tasks, setTasks] = useState<Array<Task>>([
    {
      id: 1,
      title: 'Task title goes here',
      description:
        'Task description goes here if text size is more than 3 paragraphs it is trimmed.',
      createdAt: 'Nov 15, 2023 - 3:37 am',
      status: Status.IN_PROGRESS,
    },
    {
      id: 2,
      title: 'Task title goes here',
      description:
        'Task description goes here if text size is more than 3 paragraphs it is trimmed.',
      createdAt: 'Nov 15, 2023 - 3:37 am',
      status: Status.TODO,
    },
  ])

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
