import { useState } from 'react'

import { Page } from '../styles/containers'
import PageHeader from '../components/PageHeader'
import PlanContent from '../components/PlanContent'

export default () => {
  const [beenEdited, setBeenEdited] = useState(false)

  return (
    <Page column>
      <PageHeader
        title="Plan"
        btnTitle="save"
        btn={true}
        btnCondition={beenEdited}
      />
      <PlanContent setBeenEdited={setBeenEdited} />
    </Page>
  )
}
