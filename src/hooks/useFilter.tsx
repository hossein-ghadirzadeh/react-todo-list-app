import { useMemo } from 'react'
import { useTask } from '../context/task.context'

export const useFilter = (searchQuery: string) => {
  const { tasks } = useTask()

  return useMemo(() => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [tasks, searchQuery])
}
