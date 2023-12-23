import { ThemeProvider } from '@mui/material'
import { Home } from './features'
import { theme } from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TaskEdit } from './features/task-edit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'task/:taskId/edit',
    element: <TaskEdit />,
  },
])

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
