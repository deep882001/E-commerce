import React from 'react'
import { render } from '@testing-library/react'
import 'whatwg-fetch'
import App from './App'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
