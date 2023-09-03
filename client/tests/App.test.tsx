import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  test('renders', () => {
    render(<App />)
    screen.debug()
  })
})
