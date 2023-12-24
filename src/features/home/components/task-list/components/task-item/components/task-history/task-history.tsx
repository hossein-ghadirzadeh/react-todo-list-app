import { Stack, Typography } from '@mui/material'
import { TaskHistoryProps } from './task-history.types'
import { HistoryList } from './components/history-list'

type HistoryObject = {
  title: string
  updatedAt: string
}

export const TaskHistory = ({ taskId }: TaskHistoryProps) => {
  const data: Array<HistoryObject> = [
    {
      title: 'The task was marked as “Todo”',
      updatedAt: 'Nov 15, 2023 - 3:37 am',
    },
    {
      title: 'The task was marked as “Doing”',
      updatedAt: 'Nov 15, 2023 - 3:37 am',
    },
  ]
  return (
    <Stack gap={1}>
      <Typography variant="h6" fontWeight="bold" fontSize="24px">
        Task History {`>`} taskID = {taskId}
      </Typography>

      <HistoryList data={data} />
    </Stack>
  )
}
