import { Wrapper } from '../../styles/containers'
import { Card, Text } from '../../styles/items'

export default ({ term, handleClick }) => {
  return (
    <Card
      radius=".75rem"
      column
      width="auto"
      height="max-content"
      onClick={() => handleClick(`${term.season}${term.year}`)}
    >
      <Wrapper justifyContent="space-between" margin="0 0 1rem 0">
        <Text fontSize="1.5rem">{term.season}</Text>
        <Text fontSize="1.5rem">{term.year}</Text>
      </Wrapper>
      <Wrapper justifyContent="space-between">
        <Text margin="0 1rem 0 0">
          {term.courses.length}
          <br />
          courses
        </Text>
        <Text>
          8
          <br />
          students
        </Text>
      </Wrapper>
    </Card>
  )
}
