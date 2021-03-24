import { useState } from 'react'
import store from '../store'
import { useProxy } from 'valtio'
import { useParams } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Input, Label, Btn } from '../styles/items'

export default () => {
  const { courses } = useProxy(store)
  const { id: courseID } = useParams()
  const course = courses.find((course) => course.id.toLowerCase() == courseID)
  const [title, setTitle] = useState(course.title)
  const [id, setId] = useState(course.id)

  return (
    <Page column alignItems="center" justifyContent="space-around">
      <Wrapper width="auto" column>
        <Label>Title</Label>
        <Input
          required
          border
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </Wrapper>
      <Wrapper width="auto" column>
        <Label>Code</Label>
        <Input
          required
          border
          placeholder="code"
          fontSize="1.25rem"
          value={id}
          onChange={(e) => {
            setId(e.target.value)
          }}
        />
      </Wrapper>

      <Btn tertiary>save</Btn>
    </Page>
  )
}
