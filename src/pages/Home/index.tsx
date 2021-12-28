import { FiStar, FiClock } from 'react-icons/fi'

import { Container, Content, CardList, Card, CardDetails } from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <h1>Section title</h1>

        <CardList>
          <Card>
            <img 
              src="" 
              alt="desc" 
            />

            <CardDetails>
              <span>Movie name</span>

              <div>
                <div>
                  <FiStar /> Start
                </div>

                <div>
                  <FiClock /> Duration
                </div>
              </div>
            </CardDetails>
          </Card>
        </CardList>
      </Content>
    </Container>
  )
}