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
              cardProps={movie}
              toggleMovieInfo={handleShowMovieInfo}
            />
          ))
        }
      </Content>

      {movieInfoId && <MovieInfo
        title="Ex Title"
        subtitle="Ex subtitle"
        release="data ex"
        genre="genre ex"
        runtime="runtime ex"
        overview="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quos dolore quia ex. Doloribus, sunt, quos temporibus optio neque culpa numquam quas, voluptate tempore illo perspiciatis vero nam ex. Sapiente?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam perspiciatis molestias laudantium. Id, nihil sit modi unde reiciendis excepturi eveniet, porro aut voluptas dignissimos voluptate animi quisquam dicta."
        banner="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
        trailerUrl="https://www.youtube.com/watch?v=sY1S34973zA"
      />}
    </Container>
  )
}