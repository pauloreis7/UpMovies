import styled from 'styled-components'
import { motion } from 'framer-motion'

import { device } from '../../styles/responsive'

export const Container = styled(motion.div)`
  position: relative;

  max-height: 21.25rem;
  max-width: 14.31rem;

  box-shadow: var(--black) 0px 10px 38px, var(--black) 0px 15px 12px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media ${device.mobileM} { 
    max-height: 28rem;
    max-width: 21rem;
  }
`

export const CardDetails = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1rem 1rem;

  background: var(--black);

  > span {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--gray-200);

    margin-top: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      font-weight: 600;
      color: var(--gray-200);

      svg {
        color: var(--yellow-500);
        margin-right: 0.5rem;
      }
    }
  }
`