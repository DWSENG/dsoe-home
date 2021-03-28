import { useState, useEffect } from 'react'
import { useProxy } from 'valtio'
import store, { setTermSearch } from '../store'
import { useHistory } from 'react-router-dom'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text, Card } from '../styles/items'
import SearchBox from '../components/SearchBox'
import AddTermModal from '../components/modals/AddTermModal'

export default () => {
  const history = useHistory()
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { terms, termSearch, isAdmin } = useProxy(store)

  useEffect(() => {
    setSearch(termSearch)
  }, [])

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleClick = (_id) => {
    const idLower = _id.toLowerCase()
    history.push(`/terms/${idLower}`)
  }

  const filteredTerms = terms.filter(({ season, year }) => {
    if (search == '') return { season, year }
    if (
      season.toLowerCase().includes(search.toLowerCase()) ||
      year.toString().includes(search.toLowerCase())
    ) {
      return season, year
    }

    return
  })

  return (
    <Page column scroll>
      <AddTermModal isOpen={isOpen} closeModal={closeModal} />
      <Wrapper
        padding="2rem 4rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Terms</Title>
        {isAdmin && (
          <Btn secondary onClick={openModal}>
            add
          </Btn>
        )}
      </Wrapper>
      <SearchBox
        search={search}
        setSearch={setSearch}
        setItemSearch={setTermSearch}
      />
      <Wrapper
        alignItems="space-between"
        justifyContent="center"
        max-height="100%"
        flexWrap
        padding="1rem 1rem 0 1rem"
      >
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term, key) => (
            <Card
              radius=".75rem"
              key={key}
              column
              width="auto"
              height="max-content"
              onClick={() => handleClick(`${term.season}${term.year}`)}
            >
              <p>{term.season}</p>
              <p>{term.year}</p>
            </Card>
          ))
        ) : (
          <Text>no term found matching '{search}'</Text>
        )}
      </Wrapper>
    </Page>
  )
}
