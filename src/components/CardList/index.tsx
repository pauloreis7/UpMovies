import { CardProps } from '../../types/CardProps'

import { MovieCard } from '../MovieCard'

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
            />
          ))
        }
      </Content>
      
    </Container>
  )
}