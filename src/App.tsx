import { Container, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Breadcrumb } from './components/breadcrumb'
import { Home, TaskEdit } from './features'
import { theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <BrowserRouter>
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task/:taskId/edit" element={<TaskEdit />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  )
}
