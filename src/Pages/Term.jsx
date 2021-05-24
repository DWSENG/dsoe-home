// single term page component

import { useState } from 'react'
import { useProxy } from 'valtio'
import store from '../store'
import { useParams } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Title, Text, Card } from '../styles/items'
import TermCourseCard from '../components/cards/TermCourseCard'

export default () => {
  const { courses, students } = useProxy(store)
  const { id } = useParams()

  const [selectedCourse, setSelectedCourse] = useState('')

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
          {courses.map((course, index) =>
            course.id === selectedCourse ? (
              <TermCourseCard
                key={index}
                course={course}
                setSelectedCourse={setSelectedCourse}
                selected
              />
            ) : (
              <TermCourseCard
                key={index}
                course={course}
                setSelectedCourse={setSelectedCourse}
              />
            )
          )}
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
