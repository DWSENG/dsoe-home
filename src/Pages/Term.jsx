import { useState } from 'react'
import { useProxy } from 'valtio'
import store, { getCourse } from '../store'
import { useParams } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text, Card } from '../styles/items'
import CourseCard from '../components/cards/CourseCard'

export default () => {
  const { isAdmin, courses, students } = useProxy(store)
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <Page column>
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>{id}</Title>
      </Wrapper>
      {/* content wrapper */}
      <Wrapper padding="1rem 1rem 0 1rem" height="100%" scroll flex="1">
        {/* courses wrapper */}
        <Wrapper
          flexWrap
          margin="0 1rem 1rem 0"
          shadow
          radius=".75rem"
          flex="2"
          justifyContent="center"
          alignItems="center"
          max-height="100%"
          width="max-content"
          scroll
        >
          {/* courses title wrapper */}
          <Wrapper margin="1rem 0 0 2rem">
            <Text fontSize="1.5rem">Courses</Text>
          </Wrapper>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </Wrapper>
        {/* students wrapper */}
        <Wrapper
          flexWrap
          shadow
          radius=".75rem"
          margin="0 0 1rem 0"
          max-height="100%"
          flex="1"
          scroll
        >
          {/* students title wrapper */}
          <Wrapper width="100%" height="min-content" margin="1rem 0 0 2rem">
            <Text fontSize="1.5rem">Students</Text>
          </Wrapper>
          {students.map((student, index) => (
            <Card
              radius=".75rem"
              key={index}
              column
              width="auto"
              height="max-content"
            >
              <p>{student.name}</p>
              <p>{student.username}</p>
            </Card>
          ))}
        </Wrapper>
      </Wrapper>
    </Page>
  )
}
