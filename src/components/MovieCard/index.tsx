import { FiStar, FiClock } from 'react-icons/fi'

import { CardProps } from '../../types/CardProps'

import { Container, CardDetails } from './styles'

export function MovieCard({ 
    title, 
    poster, 
    rating, 
    runtime,
    toggleMovieInfo
  }: CardProps) {
  return (
    <Container onClick={() => toggleMovieInfo('ex-123')}>
      <img src={poster} alt={title} />

      <CardDetails>
        <span>{title}</span>

        <div>
          <div>
            <FiStar /> {rating}
          </div>

          <div>
            <FiClock /> {runtime}
          </div>
        </div>
      </CardDetails>
    </Container>
  )
}