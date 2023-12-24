import { ReactNode, createContext, useContext, useState } from 'react'
import { Status, Task } from '../types'
import { formatTimestamp } from '../utils/date'
import { generateNextId } from '../utils/task'

interface TaskContextState {
  tasks: Task[]
  addTask: (title: string, description: string) => void
  editTask: (updatedTask: Task) => void
  deleteTask: (taskId: number) => void
}

const TaskContext = createContext<TaskContextState>({
  tasks: [],
  addTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
})

interface TaskProviderProps {
  children: ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Array<Task>>([])

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
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task,
    )
    setTasks(updatedTasks)
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => useContext(TaskContext)
