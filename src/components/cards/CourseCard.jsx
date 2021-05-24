// card component for the courses in courses page

import { Card, Text, Title, Tag } from '../../styles/items'
import { Wrapper } from '../../styles/containers'

export default ({ course, openCourseModal, setCourse }) => {
  const handleClick = () => {
    setCourse(course)
    openCourseModal()
  }
  const backgroundColor = ({ course_code }) => {
    const code = course_code.substr(0, 4)
    if (code === 'SENG') {
      return '#0099d1'
    }
    if (code === 'ENGR') {
      return '#7577C4'
    }
    return '#199E84'
  }

  return (
    <Card
      width="max-content"
      height="auto"
      flex="1 0 200px"
      maxWidth="250px"
      onClick={handleClick}
      background={backgroundColor(course)}
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
