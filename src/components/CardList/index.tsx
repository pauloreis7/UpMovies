import { useState, useEffect, useCallback, useMemo } from 'react'
import dayjs from 'dayjs'

import { api } from '../../services/api'

import { CardProps } from '../../types/CardProps'

import { MovieCard } from '../MovieCard'
import { MovieInfo } from '../MovieInfo'

import { Container, Content } from './styles'

interface CardListProps {
  isRelease?: boolean
  sectionTitle: string
  gte?: string
  lte?: string
}

type ApiResults = {
  id: number
  title: string
  poster_path: string
  vote_average: number
  release_date: string
}

const apiKey = '00de6cc5d497dcd93246639e03256bb2'
const releaseUrl = `movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`

export function CardList({ 
    isRelease = false,
    sectionTitle,
    gte,
    lte
  }: CardListProps) {
  const [movieInfoId, setMovieInfoId] = useState(0)
  const [movies, setMovies] = useState<CardProps[]>([])

  useEffect(() => {
    const apiUrl = isRelease 
    ? releaseUrl
    : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${gte}&primary_release_date.lte=${lte}`

    api.get(apiUrl)
    .then(response => {
      const formattedData = response.data.results
      .map((result: ApiResults, i: number)  => ({
        id: result.id,
        title: result.title,
        poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        rating: result.vote_average,
        date: dayjs(result.release_date).format('DD/MM/YYYY'),
      })).filter((_: CardProps, i: number) => i <= 4)

      setMovies(formattedData)
    })
  }, [])

  const handleShowMovieInfo = useCallback((movieId: number) => {
    if(movieInfoId === movieId) {
      setMovieInfoId(0)
      return
    }

    setMovieInfoId(movieId)  
  }, [movieInfoId])

  return (
    <Container isRelease={isRelease}>
      <h1>{sectionTitle}</h1>

      <Content>
        {movies.map(movie => (
            <MovieCard
              key={movie.id}
              cardProps={movie}
              toggleMovieInfo={handleShowMovieInfo}
            />
          ))
        }
      </Content>

      {movieInfoId && <MovieInfo movieId={movieInfoId} />}
    </Container>
  )
}
