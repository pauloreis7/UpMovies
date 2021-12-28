import styled, { css } from "styled-components"

export const Container = styled.article`
  width: 100%;
  height: 32rem;

  background: black;

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 55%;
  height: 100%;
  min-width: 600px;

  padding: 3rem;
  text-align: left;

  color: var(--gray-100);

  background-image: url("https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

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

    li:first-child strong {
      color: var(--green-500);
    }

    li + li {
      margin-top: 0.75rem;
    }
  }

  p {
    font-size: 1.05rem;
  }
`

export const Player = styled.div`
  flex: 1;
  padding: 0.5rem 0;

  background: var(--black);
`