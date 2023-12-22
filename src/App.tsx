import { ThemeProvider } from '@mui/material'
import { Home } from './features'
import { theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
