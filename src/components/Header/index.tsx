import { fadeInDownHeader } from '../../animations/GlobalAnimations'

import { Container, Content } from './styles'

export function Header() {
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