import { render, screen } from '@testing-library/react'
import React from 'react'

import { MovieCard } from '.' 

const card = {
  id: 1,
  title: 'title',
  poster: 'poster',
  rating: 'rating',
  date: 'date',
}

function handleFn(movieId: number) {
  return
}

describe('MovieCard component', () => {
  it('renders correctly', () => {
    render(
      <MovieCard cardProps={card} toggleMovieInfo={handleFn} />
    )
  
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('rating')).toBeInTheDocument()
    expect(screen.getByText('date')).toBeInTheDocument()
  })
})