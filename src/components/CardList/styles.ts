import styled, { css } from "styled-components"

interface ContainerProps {
  isRelease: boolean
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  margin-bottom: 1rem;
  padding: 2rem 3rem 4rem;

  ${props => 
    props.isRelease && 
    css`
      background: var(--gray-400);
    `
  }

  h1 {
    margin-bottom: 1.5rem;
    color: var(--red-500);
    font-size: 2rem;

    ${props => 
      props.isRelease && 
      css`
        margin-bottom: 2.5rem;
        color: var(--blue-500);
      `
    }   
  }
`

export const Content = styled.div`
  max-width: 1420px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
`