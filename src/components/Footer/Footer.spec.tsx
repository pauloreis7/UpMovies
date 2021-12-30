import { render, screen } from '@testing-library/react'
import React from 'react'

import { Footer } from '.' 

describe('Footer component', () => {
  it('renders correctly', () => {
    render(
      <Footer />
    )
  
    expect(screen.getByText('Copyright © Paulo Reis. Todos os direitos reservados.'))
    .toBeInTheDocument()
  })
})