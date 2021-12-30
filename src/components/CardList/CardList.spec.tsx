import { render, screen } from '@testing-library/react'
import React from 'react'

import { CardList } from '.' 

describe('CardList component', () => {
  it('renders correctly', () => {
    render(
      <CardList sectionTitle='Julho/2021' gte='2021-07-01' lte='2021-08-01' />
    )

    expect(screen.getByText('Julho/2021')).toBeInTheDocument()
  })
})