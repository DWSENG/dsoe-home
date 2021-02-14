import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 40px;
  margin: 2em;
`
const Head = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NewPlanBtn = styled.button`
  color: var(--light);
  background: var(--main);
  border: none;
  padding: 0.75em 1em;
  margin: 2em;
  border-radius: 1em;
  transition: transform 350ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  /* border: 1px solid var(--light4); */

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    -webkit-box-shadow: var(--shadow-icon);
    -moz-box-shadow: var(--shadow-icon);
    box-shadow: var(--shadow-icon);
  }
  @media (max-width: 768px) {
    transition: all 500ms ease;
  }
`
const Body = styled.div``
const Plan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  border-radius: 1em;
  background: var(--light-acc);
`

export default () => (
  <>
    <Head>
      <Title>plans</Title>
      <NewPlanBtn>new</NewPlanBtn>
    </Head>
    <Body>
      <Plan>main</Plan>
    </Body>
  </>
)
