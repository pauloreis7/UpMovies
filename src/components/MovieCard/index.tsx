import React from 'react'
import { FiStar, FiClock } from 'react-icons/fi'

import { CardProps } from '../../types/CardProps'

import { cardHover } from '../../animations/GlobalAnimations'
import { Container, CardDetails } from './styles'

interface MovieCardProps {
  cardProps: CardProps
  toggleMovieInfo: (movieId: number) => void
}

export function MovieCard({cardProps, toggleMovieInfo}: MovieCardProps) {
  return (
    <Container 
      whileHover={cardHover}
      onClick={() => toggleMovieInfo(cardProps.id)}
    >
      <img src={cardProps.poster} alt={cardProps.title} />

      <CardDetails>
        <span>{cardProps.title}</span>

        <div>
          <div>
            <FiStar /> {cardProps.rating}
          </div>

          <div>
            <FiClock /> {cardProps.date}
          </div>
        </div>
      </CardDetails>
    </Container>
  )
}