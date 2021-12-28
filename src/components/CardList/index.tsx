import { useState } from 'react'

import { CardProps } from '../../types/CardProps'

import { MovieCard } from '../MovieCard'
import { MovieInfo } from '../MovieInfo'

import { Container, Content } from './styles'

interface CardListProps {
  isRelease?: boolean
  sectionTitle: string
  movies?: CardProps[]
}

export function CardList({ 
    isRelease = false,
    sectionTitle,
    movies 
  }: CardListProps) {
  const [movieInfoId, setMovieInfoId] = useState('')

  function handleShowMovieInfo(movieId: string) {
    if(movieInfoId === movieId) {
      setMovieInfoId('')
      return
    }

    setMovieInfoId('ex-123')
  }

  return (
    <Container isRelease={isRelease}>
      <h1>{sectionTitle}</h1>

      <Content>
        {movies && movies.map(movie => (
            <MovieCard
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              runtime={movie.runtime}
              toggleMovieInfo={handleShowMovieInfo}
            />
          ))
        }
      </Content>

      {movieInfoId && <MovieInfo />}
    </Container>
  )
}