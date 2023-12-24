import { ReactNode, createContext, useContext, useState } from 'react'
import { Status, Task } from '../types'
import { formatTimestamp } from '../utils/date/formatTimestamp'

interface TaskContextState {
  tasks: Task[]
  addTask: (title: string, description: string) => void
}

const TaskContext = createContext<TaskContextState>({
  tasks: [],
  addTask: () => {},
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

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => useContext(TaskContext)
