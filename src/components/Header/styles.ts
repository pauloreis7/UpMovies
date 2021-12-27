import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 1rem 4rem;

  background: var(--gray-100);
  border-bottom: 1px solid var(--gray-500);
`

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;

  p {
    font-size: 2rem;
    color: var(--gray-900);
    font-Weight: 700;

    span {
      color: var(--red-500);
    }
  }
`