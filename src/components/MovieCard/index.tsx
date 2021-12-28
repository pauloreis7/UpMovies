import { FiStar, FiClock } from 'react-icons/fi'

import { CardProps } from '../../types/CardProps'

import { cardHover } from '../../animations/GlobalAnimations'
import { Container, CardDetails } from './styles'

interface MovieCardProps {
  cardProps: CardProps
  toggleMovieInfo: (movieId: string) => void
}

export function MovieCard({cardProps, toggleMovieInfo}: MovieCardProps) {
  return (
    <Container 
      whileHover={cardHover}
      onClick={() => toggleMovieInfo('ex-123')}
    >
      <img src={cardProps.poster} alt={cardProps.title} />

      <CardDetails>
        <span>{cardProps.title}</span>

        <div>
          <div>
            <FiStar /> {cardProps.rating}
          </div>

          <div>
            <FiClock /> {cardProps.runtime}
          </div>
        </div>
      </CardDetails>
    </Container>
  )
}