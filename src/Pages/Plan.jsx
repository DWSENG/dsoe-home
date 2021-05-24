// plan page component

import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { Page } from '../styles/containers'
import { Text } from '../styles/items'
import PageHeader from '../components/PageHeader'
import PlanContent from '../components/PlanContent'
import { GET_COURSES } from '../api/queries'

export default () => {
  const [beenEdited, setBeenEdited] = useState(false)
  const { loading, error, data } = useQuery(GET_COURSES)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error}</Text>
  return (
    <Page column>
      <PageHeader
        title="Plan"
        btnTitle="save"
        btn={true}
        btnCondition={beenEdited}
      />
      <PlanContent setBeenEdited={setBeenEdited} courses={data.courses} />
    </Page>
  )
}
