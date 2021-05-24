// card component for the courses in the plan page

import { Draggable } from 'react-beautiful-dnd'

import { Wrapper } from '../../styles/containers'
import { Card, Text } from '../../styles/items'

export default ({ course, index }) => {
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
    <Draggable
      key={course.course_id}
      draggableId={course.course_id}
      index={index}
    >
      {(dragProvided) => (
        <Card
          {...dragProvided.dragHandleProps}
          {...dragProvided.draggableProps}
          ref={dragProvided.innerRef}
          background={backgroundColor(course)}
          padding=".5rem"
          height="min-content"
          flex="1 1 auto"
          minWidth="min-content"
          maxWidth="40%"
          radius=".6rem"
        >
          <Text textAlign="center" margin="0 0 .5rem 0" fontSize="75%">
            {course.course_title}
          </Text>
          <Wrapper padding="0" alignItems="center" justifyContent="center">
            <Text white fontSize="60%">
              {course.course_code}
            </Text>
            <Wrapper
              alignItems="center"
              justifyContent="center"
              padding=".1rem .2rem"
              margin="0 0 0 .2rem"
              credit
              radius=".2rem"
              width="auto"
            >
              <Text white fontSize="50%">
                {course.credits}
              </Text>
            </Wrapper>
          </Wrapper>
        </Card>
      )}
    </Draggable>
  )
}
