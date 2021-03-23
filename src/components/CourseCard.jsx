import { Card, SubHeading, Title, Tag } from '../styles/items'
import { Wrapper } from '../styles/containers'
import { useHistory } from 'react-router-dom'

export default ({ course }) => {
  const history = useHistory()

  const handleClick = (_id) => {
    const idLower = _id.toLowerCase()
    history.push(`/courses/${idLower}`)
  }

  return (
    <Card onClick={() => handleClick(course.id)}>
      <Wrapper column alignItems="left" justifyContent="center">
        <Title sm>{course.title}</Title>
        <SubHeading courseCard sm>
          {course.id}
        </SubHeading>
      </Wrapper>
      <Wrapper alignItems="center" justifyContent="space-around">
        <Tag required={course.required}>
          {course.required ? 'required' : 'elective'}
        </Tag>
        <Tag credits>{course.credits} credits</Tag>
      </Wrapper>
    </Card>
  )
}
