import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useTask } from '../../../../context/task.context'
import { useFilter } from '../../../../hooks/useFilter'
import { RenderIf } from '../../../../utils/dom'
import { TaskEmpty } from './components/task-empty'
import { TaskFilter } from './components/task-filter'
import { TaskItem } from './components/task-item'

export const TaskList = () => {
  const { tasks } = useTask()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const filteredTasks = useFilter(searchQuery)

  return (
    <Stack gap={1}>
      <Typography variant="h6" fontWeight="bold" fontSize="18px">
        Tasks
      </Typography>

      <RenderIf isTrue={!tasks.length}>
        <TaskEmpty />
      </RenderIf>

      <RenderIf isTrue={!!tasks.length}>
        <TaskFilter onChange={setSearchQuery} />
      </RenderIf>

      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  )
}
