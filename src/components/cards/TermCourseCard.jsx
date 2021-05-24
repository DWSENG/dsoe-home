// card component for the courses in a single term page

import { Card, SubHeading, Title, Tag } from '../../styles/items'
import { Wrapper } from '../../styles/containers'

export default ({ course, setSelectedCourse, selected }) => {
  return selected ? (
    <Card onClick={() => setSelectedCourse(course.id)} selected>
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
  ) : (
    <Card onClick={() => setSelectedCourse(course.id)}>
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
