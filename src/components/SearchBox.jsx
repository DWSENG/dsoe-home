import { Wrapper } from '../styles/containers'
import { Input } from '../styles/items'
import { RiSearchLine } from 'react-icons/ri'

export default ({ search, setSearch, setItemSearch }) => {
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
          setItemSearch(e.target.value)
        }}
        value={search}
        placeholder="search..."
      />
      <RiSearchLine size={20} style={{ color: '#9e2933' }} />
    </Wrapper>
  )
}
