import { FiStar, FiClock } from 'react-icons/fi'

import { Container, Content, Card } from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <h1>Section title</h1>

        <Card>
          <div>
            <span>Movie name</span>

            <div>
              <div>
                <FiStar /> Start
              </div>

              <div>
                <FiClock /> Duration
              </div>
            </div>
          </div>
        </Card>
      </Content>
    </Container>
  )
}