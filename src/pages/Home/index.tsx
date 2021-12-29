import { CardList } from '../../components/CardList'

import { Container } from './styles'

const cardLists = [
  {
    isRelease: true,
    sectionTitle: 'Em Cartaz'
  },

  {
    sectionTitle: 'Julho/2021',
    gte: '2021-07-01',
    lte: '2021-08-01',
  },

  {
    sectionTitle: 'Agosto/2021',
    gte: '2021-08-01',
    lte: '2021-09-01'
  },

  {
    sectionTitle: 'Setembro/2021',
    gte: '2021-09-01',
    lte: '2021-10-01'
  },

  {
    sectionTitle: 'Outubro/2021',
    gte: '2021-10-01',
    lte: '2021-11-01'
  },

  {
    sectionTitle: 'Novembro/2021',
    gte: '2021-11-01',
    lte: '2021-12-01'
  },

  {
    sectionTitle: 'Dezembro/2021',
    gte: '2021-12-01',
    lte: '2022-01-01'
  }
]

export function Home() {
  return (
    <Container>
      {cardLists.map(cardListItem => (
        <CardList
          key={cardListItem.sectionTitle}
          isRelease={cardListItem.isRelease}
          sectionTitle={cardListItem.sectionTitle}
          gte={cardListItem.gte}
          lte={cardListItem.lte}
        />
      ))}
    </Container>
  )
}
