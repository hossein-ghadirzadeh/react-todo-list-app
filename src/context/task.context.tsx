import { ReactNode, createContext, useContext, useState } from 'react'
import { Status, Task, TasksHistoryUpdatedFields } from '../types'
import { formatTimestamp } from '../utils/date'
import { generateNextId } from '../utils/task'
import { getChangedProperties } from '../utils/object'

interface TaskContextState {
  tasks: Task[]
  tasksHistory: Record<number, Array<TasksHistoryUpdatedFields>>
  addTask: (title: string, description: string) => void
  editTask: (updatedTask: Task) => void
  deleteTask: (taskId: number) => void
}

const TaskContext = createContext<TaskContextState>({
  tasks: [],
  tasksHistory: {},
  addTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
})

interface TaskProviderProps {
  children: ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Array<Task>>([])
  const [tasksHistory, setTasksHistory] = useState<
    Record<number, Array<TasksHistoryUpdatedFields>>
  >({})

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: generateNextId(tasks),
      title,
      description,
      createdAt: formatTimestamp(new Date()),
      status: Status.TODO,
    }

    setTasks([...tasks, newTask])
  }

  const editTask = (updatedTask: Task) => {
    const { id: taskId } = updatedTask
    const originalTask: Task = tasks.find(task => task.id === taskId)!
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedTask } : task,
    )

    const updatedField = getChangedProperties(originalTask, updatedTask)

    if (Object.keys(updatedField).length > 0) {
      const updatedFieldWithTimestamp = {
        ...updatedField,
        updatedAt: formatTimestamp(new Date()),
      }

      setTasksHistory({
        ...tasksHistory,
        [taskId]: [
          ...(tasksHistory?.[taskId] || []),
          updatedFieldWithTimestamp,
        ],
      })
    }

    setTasks(updatedTasks)
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    const updatedTasksHistory = { ...tasksHistory }
    delete updatedTasksHistory[taskId]
    setTasksHistory(updatedTasksHistory)
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, editTask, deleteTask, tasksHistory }}
    >
      {children}
    </TaskContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => useContext(TaskContext)
