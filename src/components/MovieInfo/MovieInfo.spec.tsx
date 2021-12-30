import { render, screen } from '@testing-library/react'
import React from 'react'

import { MovieInfo } from '.' 

describe('MovieCard component', () => {
  it('renders correctly', () => {
    render(
      <MovieInfo movieId={1} />
    )
  
    expect(screen.getByText('Estreia:')).toBeInTheDocument()
    expect(screen.getByText('Gênero:')).toBeInTheDocument()
    expect(screen.getByText('Duração:')).toBeInTheDocument()
  })
})