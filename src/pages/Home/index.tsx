import { CardList } from '../../components/CardList'

import { Container } from './styles'

const ex = [
  {
    title: "Cadeiras",
    poster: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
    rating: "6",
    runtime: "120min",
  },
  {
    title: "Cadeiras",
    poster: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
    rating: "6",
    runtime: "120min",
  },
  {
    title: "Cadeiras",
    poster: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
    rating: "6",
    runtime: "120min",
  },
  {
    title: "Cadeiras",
    poster: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
    rating: "6",
    runtime: "120min",
  },
  {
    title: "Cadeiras",
    poster: "https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
    rating: "6",
    runtime: "120min",
  },
]

export function Home() {
  return (
    <Container>
      <CardList
        isRelease
        sectionTitle='Em Cartaz'
        movies={ex}
      />

      <CardList
        sectionTitle='Em Cartaz'
        movies={ex}
      />

      <CardList
        sectionTitle='Em Cartaz'
        movies={ex}
      />
    </Container>
  )
}

