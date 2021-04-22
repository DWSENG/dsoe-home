import { useState } from 'react'
import { useProxy } from 'valtio'
import store from '../store'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text } from '../styles/items'
import EditCourseModal from '../components/modals/EditCourseModal'
import { GET_COURSE } from '../api/queries'

export default () => {
  const { isAdmin } = useProxy(store)
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const { loading, error, data } = useQuery(GET_COURSE, {
    variables: { courseId: parseInt(id) },
  })

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  console.log('DATAAAAA: ', data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  return (
    <Page column>
      <EditCourseModal
        isOpen={isOpen}
        closeModal={closeModal}
        course={data.course}
      />
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>{data.course.courseTitle}</Title>
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
        <Text>{data.course.courseCode}</Text>
        <Text>{data.course.courseDescription}</Text>
        <Text>{data.course.credits} credits</Text>
        <Text>{data.course.required && 'this course is required'}</Text>
      </Wrapper>
    </Page>
  )
}
