import { useState } from 'react'
import { useProxy } from 'valtio'
import store, { getCourse } from '../store'
import { useParams } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, SubHeading } from '../styles/items'
import EditCourseModal from '../components/modals/EditCourseModal'

export default () => {
  const { isAdmin } = useProxy(store)
  const { id } = useParams()
  const course = getCourse(id)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <Page column>
      <EditCourseModal
        isOpen={isOpen}
        closeModal={closeModal}
        course={course}
      />
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>{course.title}</Title>
        {isAdmin && (
          <Btn secondary onClick={openModal}>
            edit
          </Btn>
        )}
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
        <SubHeading>{course.required ? 'required!' : 'elective'}</SubHeading>
      </Wrapper>
    </Page>
  )
}
