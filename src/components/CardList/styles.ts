import styled, { css } from "styled-components"

import { device } from '../../styles/responsive'

interface ContainerProps {
  isRelease: boolean
}

export const Container = styled.section<ContainerProps>`
  width: 100%;

  margin-bottom: 1rem;
  padding-top: 2rem;

  ${props => 
    props.isRelease && 
    css`
      background: var(--gray-400);
    `
  }

  h1 {
    margin-bottom: 1.5rem;
    padding-left: 3rem;
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
  width: 100%;
  max-width: 1680px;
  
  margin: 0 auto;
  padding: 0 3rem 4rem;

  display: grid;
  gap: 3rem;

  @media ${device.mobileM} { 
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobileL} { 
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} { 
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} { 
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} { 
    grid-template-columns: repeat(5, 1fr);
  }
`