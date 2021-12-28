import ReactPlayer from 'react-player'

import { Container, Content, Player } from './styles'

export function MovieInfo() {
  return (
    <Container>
      <Content bgImage={"https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"}>
        <h2>Ex Title</h2>

        <h3>Ex subtitle</h3>

        <ul>
          <li><strong>Estreia: </strong> data ex</li>
          <li><strong>Gênero: </strong> genre ex</li>
          <li><strong>Duração: </strong>runtime ex</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quos dolore quia ex. Doloribus, sunt, quos temporibus optio neque culpa numquam quas, voluptate tempore illo perspiciatis vero nam ex. Sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque aperiam perspiciatis molestias laudantium. Id, nihil sit modi unde reiciendis excepturi eveniet, porro aut voluptas dignissimos voluptate animi quisquam dicta.
        </p>
      </Content>

      <Player>
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=sY1S34973zA"
          controls
          width="100%"
          height="100%"
        />
      </Player>
    </Container>
  )
}