import ReactPlayer from 'react-player'

import { fadeInMovieInfo } from '../../animations/GlobalAnimations'
import { Container, Content, Player } from './styles'

interface MovieInfoProps {
  title: string
  subtitle: string
  release: string
  genre: string
  runtime: string
  overview: string
  banner: string
  trailerUrl: string
}

export function MovieInfo({
    title,
    subtitle,
    release,
    genre,
    runtime,
    overview,
    banner,
    trailerUrl
  }: MovieInfoProps) {
  return (
    <Container
      initial="initial"
      animate="animate"
      variants={fadeInMovieInfo}
    >
      <Content bgImage={banner}>
        <h2>{title}</h2>

        <h3>{subtitle}</h3>

        <ul>
          <li><strong>Estreia: </strong>{release}</li>
          <li><strong>Gênero: </strong>{genre}</li>
          <li><strong>Duração: </strong>{runtime}</li>
        </ul>

        <p>{overview}</p>
      </Content>

      <Player>
        <ReactPlayer 
          url={trailerUrl}
          controls
          width={'100%'}
          height={'100%'}
        />
      </Player>
    </Container>
  )
}