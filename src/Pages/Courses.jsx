import { useState, useEffect } from 'react'
import { useProxy } from 'valtio'
import store, { setCourseSearch } from '../store'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text } from '../styles/items'
import CourseCard from '../components/CourseCard'
import SearchBox from '../components/SearchBox'

export default () => {
  const [search, setSearch] = useState('')
  const { courses, courseSearch } = useProxy(store)

  useEffect(() => {
    setSearch(courseSearch)
  }, [])

  const filteredCourses = courses.filter(({ title, id }) => {
    if (search == '') return { title, id }
    if (
      title.toLowerCase().includes(search.toLowerCase()) ||
      id.toLowerCase().includes(search.toLowerCase())
    )
      return title, id

    return
  })

  return (
    <Page column>
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Courses</Title>
        <Btn secondary>add</Btn>
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
