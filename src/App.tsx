import { Container, ThemeProvider } from '@mui/material'
import { Home, TaskEdit } from './features'
import { theme } from './theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
      <Container maxWidth="sm">
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  )
}
