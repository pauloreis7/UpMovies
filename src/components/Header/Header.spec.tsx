import { render, screen } from '@testing-library/react'
import React from 'react'

import { Header } from '.' 

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <Header />
    )
  
    expect(screen.getByText('Up')).toBeInTheDocument()
    expect(screen.getByText('Movies')).toBeInTheDocument()
  })
})