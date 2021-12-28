import { CardList } from '../../components/CardList'

import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <h1>Section title</h1>

        <CardList />
      </Content>
    </Container>
  )
}