import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import dayjs from 'dayjs'

import { api } from '../../services/api'

import { fadeInMovieInfo } from '../../animations/GlobalAnimations'
import { Container, ContentWrapper, Content, Player } from './styles'

interface MovieInfoProps {
  movieId: number
}

type MovieInfoData = {
  title: string
  tagline: string
  release: string
  genres: string
  runtime: string
  overview: string
  banner: string
  trailerUrl: string
}

type genre = {
  id: number, 
  name: string
}

const apiKey = '00de6cc5d497dcd93246639e03256bb2'

export function MovieInfo({ movieId }: MovieInfoProps) {
  const [info, setInfo] = useState<MovieInfoData>({} as MovieInfoData)

  useEffect(() => {
    api.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR&append_to_response=videos`)
    .then(response => {
      const { data } = response

      const formattedData = {
        title: data.title,
        tagline: data.tagline,
        release: dayjs(data.release_date).format('D [de] MMMM [de] YYYY'),
        genres: data.genres.map((genre: genre) => ` ${genre.name}`).toString(),
        runtime: data.runtime,
        overview: data.overview,
        banner: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
        trailerUrl:`https://www.youtube.com/watch?v=${data.videos.results[0].key}`,
      }

      setInfo(formattedData)
    })
  }, [movieId])

  return (
    <Container
      initial="initial"
      animate="animate"
      variants={fadeInMovieInfo}
    >
      <ContentWrapper bgImage={info.banner}>
        <Content>
          <h2>{info.title}</h2>

          <h3>{info.tagline}</h3>

          <ul>
            <li><mark>Estreia:</mark> {info.release}</li>
            <li><strong>Gênero:</strong> {info.genres}</li>
            <li><strong>Duração:</strong> {info.runtime} min</li>
          </ul>

          <p>{info.overview}</p>
        </Content>
      </ContentWrapper>

      <Player>
        <ReactPlayer 
          url={info.trailerUrl}
          controls
          width={'100%'}
          height={'100%'}
        />
      </Player>
    </Container>
  )
}
