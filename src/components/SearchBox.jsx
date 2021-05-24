// this is a search box component that
// takes in a search variable and a set search function

import { Wrapper } from '../styles/containers'
import { Input } from '../styles/items'
import { RiSearchLine } from 'react-icons/ri'

export default ({ search, setSearch }) => {
  return (
    <Wrapper
      margin="1rem"
      width="auto"
      padding="0.75em 1.5em"
      radius="100vh"
      shadow
      hover
    >
      <Input
        fontSize="1rem"
        padding="0"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={search}
        placeholder="search..."
      />
      <RiSearchLine style={{ color: '#9e2933' }} />
    </Wrapper>
  )
}
