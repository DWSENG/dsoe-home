import { useState, useEffect } from 'react'
import { useProxy } from 'valtio'
import store, { setCourseSearch } from '../store'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text } from '../styles/items'
import CourseCard from '../components/cards/CourseCard'
import SearchBox from '../components/SearchBox'
import AddCourseModal from '../components/modals/AddCourseModal'

export default () => {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { courses, courseSearch, isAdmin } = useProxy(store)

  useEffect(() => {
    setSearch(courseSearch)
  }, [])

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const filteredCourses = courses.filter(({ title, id }) => {
    if (search == '') return { title, id }
    if (
      title.toLowerCase().includes(search.toLowerCase()) ||
      id.toLowerCase().includes(search.toLowerCase())
    ) {
      return title, id
    }

    return
  })

  return (
    <Page column scroll>
      <AddCourseModal isOpen={isOpen} closeModal={closeModal} />
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
      <SearchBox
        search={search}
        setSearch={setSearch}
        setCourseSearch={setCourseSearch}
      />
      <Wrapper flexWrap alignItems="center" justifyContent="space-around">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, key) => (
            <CourseCard course={course} key={key} />
          ))
        ) : (
          <Text>no course found matching '{search}'</Text>
        )}
      </Wrapper>
    </Page>
  )
}
