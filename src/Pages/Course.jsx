import { useState } from 'react'
import store, { getCourse } from '../store'
import { useProxy } from 'valtio'
import { useParams, useHistory } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, SubHeading } from '../styles/items'

export default () => {
  const { courses } = useProxy(store)
  const { id } = useParams()
  const course = getCourse(id)
  const history = useHistory()

  const handleClick = (_id) => {
    const idLower = _id.toLowerCase()
    history.push(`/courses/${idLower}/edit`)
  }

  return (
    <Page column>
      <Wrapper padding alignItems="center" justifyContent="space-between">
        <Title>{course.title}</Title>
        <Btn secondary onClick={() => handleClick(id)}>
          edit
        </Btn>
      </Wrapper>

      <Wrapper
        padding
        margin
        column
        alignItems="center"
        justifyContent="center"
      >
        <SubHeading>{course.id}</SubHeading>
        <SubHeading>{course.credits} credits</SubHeading>
        <SubHeading>{course.reuired ? 'required!' : 'elective'}</SubHeading>
      </Wrapper>
    </Page>
  )
}
