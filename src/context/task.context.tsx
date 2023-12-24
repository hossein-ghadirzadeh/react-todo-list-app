import { ReactNode, createContext, useContext, useState } from 'react'
import { Status, Task } from '../types'
import { formatTimestamp } from '../utils/date/formatTimestamp'

interface TaskContextState {
  tasks: Task[]
  addTask: (title: string, description: string) => void
  editTask: (updatedTask: Task) => void
}

const TaskContext = createContext<TaskContextState>({
  tasks: [],
  addTask: () => {},
  editTask: () => {},
})

interface TaskProviderProps {
  children: ReactNode
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Array<Task>>([])

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
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

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask }}>
      {children}
    </TaskContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => useContext(TaskContext)
