import { useState } from 'react'
import { useProxy } from 'valtio'
import { useQuery } from '@apollo/client'

import store from '../store'
import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text } from '../styles/items'
import { GET_COURSES } from '../api/queries'
import CourseCard from '../components/cards/CourseCard'
import SearchBox from '../components/SearchBox'
import AddCourseModal from '../components/modals/AddCourseModal'
import ShowCourseModal from '../components/modals/ShowCourseModal'
import EditCourseModal from '../components/modals/EditCourseModal'

export default () => {
  const [course, setCourse] = useState({})
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [courseIsOpen, setCourseIsOpen] = useState(false)
  const [courseEditIsOpen, setCourseEditIsOpen] = useState(false)
  const { isAdmin } = useProxy(store)
  const { loading, error, data } = useQuery(GET_COURSES)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const openCourseModal = () => setCourseIsOpen(true)
  const closeCourseModal = () => setCourseIsOpen(false)
  const openCourseEditModal = () => {
    setCourseEditIsOpen(true)
    setCourseIsOpen(false)
  }
  const closeCourseEditModal = () => setCourseEditIsOpen(false)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error}</Text>

  const filteredCourses = data.courses.filter((course) => {
    if (search == '') return course
    if (course.courseTitle.toLowerCase().includes(search.toLowerCase())) {
      return course
    }
    return
  })

  return (
    <Page column scroll>
      <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
      <EditCourseModal
        isOpen={courseEditIsOpen}
        closeModal={closeCourseEditModal}
        course={course}
      />
      <ShowCourseModal
        isOpen={courseIsOpen}
        closeModal={closeCourseModal}
        course={course}
        openCourseEditModal={openCourseEditModal}
      />
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Courses</Title>
        {isAdmin && (
          <Btn secondary onClick={openModal}>
            add
          </Btn>
        )}
      </Wrapper>
      <SearchBox search={search} setSearch={setSearch} />
      <Wrapper
        flexWrap
        alignItems="center"
        justifyContent="center"
        padding="1rem"
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, key) => (
            <CourseCard
              setCourse={setCourse}
              course={course}
              openCourseModal={openCourseModal}
              key={key}
            />
          ))
        ) : (
          <Text>no course found matching '{search}'</Text>
        )}
      </Wrapper>
    </Page>
  )
}
