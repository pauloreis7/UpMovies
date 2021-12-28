import { MovieCard } from '../../components/MovieCard'

import { Container, Content, CardList } from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <h1>Section title</h1>

        <CardList>
          <MovieCard />
          
          <MovieCard />
        </CardList>
      </Content>
    </Container>
  )
}