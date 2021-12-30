import React, { memo } from 'react'

import { Container, Content } from './styles'

function FooterComponent() {
  return (
    <Container>
      <Content>
        Copyright &copy; Paulo Reis. Todos os direitos reservados.
      </Content>
    </Container>
  )
}

export const Footer = memo(FooterComponent)
