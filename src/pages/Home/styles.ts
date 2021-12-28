import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.section`
  width: 100%;
  padding: 2rem 3rem 3rem;

  background: var(--gray-400);

  h1 {
    margin-bottom: 1.5rem;

    color: var(--blue-500);
    font-size: 2rem;
  }
`

export const CardList = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Card = styled.div`
  
`
export const CardDetails = styled.div`
  
`