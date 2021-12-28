import { FiStar, FiClock } from 'react-icons/fi'

import { Container, CardDetails } from './styles'

export function MovieCard() {
  return (
    <Container>
      <img 
        src="https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" 
        alt="desc" 
      />

      <CardDetails>
        <span>Movie name</span>

        <div>
          <div>
            <FiStar /> Stars
          </div>

          <div>
            <FiClock /> Duration
          </div>
        </div>
      </CardDetails>
    </Container>
  )
}