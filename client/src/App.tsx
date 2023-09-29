import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
