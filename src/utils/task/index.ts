import { Task } from '../../types'

export const generateNextId = (tasks: Task[]): number => {
  return (
    tasks.reduce((maxId, task) => (task.id > maxId ? task.id : maxId), 0) + 1
  )
}
