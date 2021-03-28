import { useState, useEffect } from 'react'
import { useProxy } from 'valtio'
import store, { setStudentSearch } from '../store'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text, Card } from '../styles/items'
import SearchBox from '../components/SearchBox'
import AddStudentModal from '../components/modals/AddStudentModal'

export default () => {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { students, studentSearch, isAdmin } = useProxy(store)

  useEffect(() => {
    setSearch(studentSearch)
  }, [])

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const filteredStudents = students.filter(({ name, username, year }) => {
    if (search == '') return { name, username, year }
    if (
      name.toLowerCase().includes(search.toLowerCase()) ||
      username.includes(search.toLowerCase())
    ) {
      return name, username, year
    }

    return
  })

  return (
    <Page column scroll>
      <AddStudentModal isOpen={isOpen} closeModal={closeModal} />
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Students</Title>
        {isAdmin && (
          <Btn secondary onClick={openModal}>
            add
          </Btn>
        )}
      </Wrapper>
      <SearchBox
        search={search}
        setSearch={setSearch}
        setItemSearch={setStudentSearch}
      />
      <Wrapper
        alignItems="space-between"
        justifyContent="center"
        max-height="100%"
        flexWrap
        padding="1rem 1rem 0 1rem"
      >
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, key) => (
            <Card
              radius=".75rem"
              key={key}
              column
              width="auto"
              height="max-content"
            >
              <p>{student.name}</p>
              <p>{student.username}</p>
            </Card>
          ))
        ) : (
          <Text>no student found matching '{search}'</Text>
        )}
      </Wrapper>
    </Page>
  )
}
