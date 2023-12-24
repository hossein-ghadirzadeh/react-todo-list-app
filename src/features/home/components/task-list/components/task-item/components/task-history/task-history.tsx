import { Stack, Typography } from '@mui/material'
import { useTask } from '../../../../../../../../context/task.context'
import { TasksHistoryUpdatedFields } from '../../../../../../../../types'
import { HistoryList } from './components/history-list'
import { TaskHistoryProps } from './task-history.types'
import { RenderIf } from '../../../../../../../../utils/dom'

export const TaskHistory = ({ taskId }: TaskHistoryProps) => {
  const { tasksHistory } = useTask()

  const data: Array<TasksHistoryUpdatedFields> = tasksHistory?.[taskId] || []

  return (
    <Stack gap={1}>
      <Typography variant="h6" fontWeight="bold" fontSize="24px">
        Task History
      </Typography>

      <RenderIf isTrue={!data.length}>
        {/* Need a UI for empty history. */}
        <></>
      </RenderIf>

      <HistoryList data={data} />
    </Stack>
  )
}
