// landing page component

import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

import { Btn, Title, SubHeading } from '../styles/items'
import { LandingContainer, Wrapper } from '../styles/containers'
import { useLogin } from '../hooks/useAuth'
import { useLazyQuery } from '@apollo/client'

import { authenticate } from '../store'
import { GET_USER_BY_AZURE_TOKEN } from '../api/queries'

export default () => {
  const history = useHistory()

  const [getUserByAzureToken, { called, loading, data }] = useLazyQuery(
    GET_USER_BY_AZURE_TOKEN
  )

  const handleLogin = async () => {
    const client = await useLogin()
    console.log(client)

    await getUserByAzureToken({ variables: { azure_token: client.azureToken } })

    if (data) {
      console.log('dataaaaaa', data)
      authenticate(client)
      history.push('/')
    }
  }
  const handleGuestLogin = () => {
    const client = { first: 'Guest' }
    authenticate(client)
    history.push('/')
  }
  if (called && loading) return <p>Loading ...</p>
  if (data) {
    console.log(data)
    return <p>{data.course}</p>
  }
  if (!called) {
    return (
      <LandingContainer>
        <Title landing xl>
          Dunwoody
          <b />
          <SubHeading landing>school of</SubHeading>
          <b />
          Engineering
        </Title>
        <Wrapper
          column
          width="max-content"
          alignItems="center"
          justifyContent="center"
        >
          <Btn secondary onClick={handleLogin}>
            login
          </Btn>
          <br />
          <Btn link onClick={handleGuestLogin}>
            continue as guest...
          </Btn>
        </Wrapper>
      </LandingContainer>
    )
  }
}
