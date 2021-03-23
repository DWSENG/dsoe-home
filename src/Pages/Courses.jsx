import { useState, useEffect } from 'react'
import { useProxy } from 'valtio'
import store, { setCourseSearch } from '../store'
import { useHistory } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Input, Text } from '../styles/items'
import CourseCard from '../components/CourseCard'
import { SearchContainer } from '../styles/containers'
import { RiSearchLine } from 'react-icons/ri'

export default () => {
  const history = useHistory()
  const [search, setSearch] = useState('')
  const { courses, courseSearch } = useProxy(store)

  useEffect(() => {
    setSearch(courseSearch)
  }, [])

  const filteredCourses = courses.filter(({ title, id }) => {
    if (search == '') return { title, id }
    else if (
      title.toLowerCase().includes(search.toLowerCase()) ||
      id.toLowerCase().includes(search.toLowerCase())
    ) {
      return title, id
    } else return
  })

  return (
    <Page column>
      <Wrapper padding alignItems="center" justifyContent="space-between">
        <Title>Courses</Title>
        <Btn secondary>add</Btn>
      </Wrapper>
      <SearchContainer>
        <Input
          fontSize="1rem"
          padding="none"
          onChange={(e) => {
            setSearch(e.target.value)
            setCourseSearch(e.target.value)
          }}
          value={search}
          placeholder="search..."
        />
        <RiSearchLine size={20} style={{ color: 'var(--main)' }} />
      </SearchContainer>
      <Wrapper
        padding
        flexWrap
        alignItems="center"
        justifyContent="space-around"
      >
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
