import React, { memo } from 'react'

import { fadeInDownHeader } from '../../animations/GlobalAnimations'
import { Container, Content } from './styles'

function HeaderComponent() {
  return (
    <Container>
      <Content
        initial="initial"
        animate="animate"
        variants={fadeInDownHeader}
      >
        <p><span>Up</span>Movies</p>
      </Content>
    </Container>
  )
}

export const Header = memo(HeaderComponent)
