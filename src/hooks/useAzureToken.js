// hook that takes in the azure token and queries for the user with that token

import { useQuery } from '@apollo/client'
import { GET_USER_BY_AZURE_TOKEN } from '../api/queries'

export default (token) => {
  const { loading, error, data } = useQuery(GET_USER_BY_AZURE_TOKEN, {
    variables: { azure_token: token },
  })
  if (error) console.log(error)
  if (data) {
    console.log(data)
  }
  return {
    data,
  }
}
