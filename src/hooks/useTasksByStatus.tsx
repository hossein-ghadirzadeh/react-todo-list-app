import { useMemo } from 'react'
import { useTask } from '../context/task.context'
import { Status, Task } from '../types'

export const useTasksByStatus = () => {
  const { tasks } = useTask()

  return useMemo(() => {
    return Object.values(Status)
      .map(status => ({
        status,
        tasks: tasks.filter((task: Task) => task.status === status),
      }))
      .filter(item => item.tasks.length > 0)
  }, [tasks])
}
