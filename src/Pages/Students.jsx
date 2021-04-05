import { useState } from 'react'
import { useProxy } from 'valtio'
import store from '../store'
import { useQuery } from '@apollo/client'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text } from '../styles/items'
import { GET_USERS } from '../api/queries'
import AddStudentModal from '../components/modals/AddStudentModal'
import StudentCard from '../components/cards/StudentCard'

export default () => {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { isAdmin } = useProxy(store)
  const { loading, error, data } = useQuery(GET_USERS)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{error}</Text>

  const students = data.users.filter((user) => {
    if (user.isAdmin === false) return user
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

      <Wrapper
        alignItems="space-between"
        justifyContent="center"
        max-height="100%"
        flexWrap
        padding="1rem 1rem 0 1rem"
      >
        {students.map((student, key) => (
          <StudentCard key={key} student={student} />
        ))}
      </Wrapper>
    </Page>
  )
}
