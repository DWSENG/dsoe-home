import { Card, Text, Title, Tag } from '../../styles/items'
import { Wrapper } from '../../styles/containers'

export default ({ course, openCourseModal, setCourse }) => {
  const handleClick = () => {
    setCourse(course)
    openCourseModal()
  }

  return (
    <Card
      width="max-content"
      height="auto"
      flex="1 0 200px"
      maxWidth="250px"
      onClick={handleClick}
    >
      <Wrapper column alignItems="left" hidden>
        <Title sm>{course.course_title}</Title>
        <Text margin=".5rem 1rem">{course.course_code}</Text>
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
