import styled from "styled-components"
import { motion } from "framer-motion"

import { size } from '../../styles/responsive'

interface ContentWrapperProps {
  bgImage: string
}

export const Container = styled(motion.article)`
  width: 100%;
  min-height: 32rem;

  background: black;

  display: flex;
  justify-content: center;

  @media (max-width: ${size.tablet}) { 
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div<ContentWrapperProps>`
  position: relative;
  width: 55%;
  min-width: 40%;

  padding: 3rem;

  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &::before {
    content: "";

    position: absolute;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%; 
    height: 100%;

    background: var(--dark);
    background: linear-gradient(90deg, rgba(0,0,0,0.3) 60%, rgba(0,0,0,1) 100%);
  }

  @media (max-width: ${size.tablet}) { 
    width: 100%;
  }
`

export const Content = styled.div`
  position: relative;
  text-align: left;
  color: var(--gray-100);

  h2 {
    font-weight: 700;
    font-size: 2rem;

    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.45rem;

    margin-bottom: 5rem;
  }

  ul {
    list-style: none;
    font-size: 1.15rem;
    font-weight: 400;

    margin-bottom: 2.5rem;

    strong {
      font-weight: 700;
    }

    li:first-child mark {
      color: var(--gray-100);
      background-color: var(--green-500);
      font-weight: 700;
    }

    li + li {
      margin-top: 0.75rem;
    }
  }

  p {
    font-size: 1.05rem;

    max-width: 50rem;
  }
`


export const Player = styled.div`
  flex: 1;
  padding: 0.5rem 0;

  background: var(--black);
`