import styled from 'styled-components'

export const Card = styled.div`
  position: relative;

  max-height: 21.25rem;

  img {
    width: 14.31rem;
    height: 21.25rem;
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