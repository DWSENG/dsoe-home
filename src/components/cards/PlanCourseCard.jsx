import { Draggable } from 'react-beautiful-dnd'

import { Wrapper } from '../../styles/containers'
import { Card, Text } from '../../styles/items'

export default ({ course, index }) => {
  return course.required ? (
    <Draggable key={course.id} draggableId={course.id} index={index}>
      {(dragProvided) => (
        <Card
          {...dragProvided.dragHandleProps}
          {...dragProvided.draggableProps}
          ref={dragProvided.innerRef}
          green
          padding=".5rem .6rem"
          height="min-content"
          width="min-content"
          radius=".6rem"
        >
          <Wrapper padding="0" alignItems="center">
            <Text white fontSize=".8rem">
              {course.id}
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
              <Text white fontSize=".5rem">
                {course.credits}
              </Text>
            </Wrapper>
          </Wrapper>
        </Card>
      )}
    </Draggable>
  ) : (
    <Draggable key={course.id} draggableId={course.id} index={index}>
      {(dragProvided) => (
        <Card
          {...dragProvided.dragHandleProps}
          {...dragProvided.draggableProps}
          ref={dragProvided.innerRef}
          purple
          padding=".5rem .6rem"
          height="min-content"
          width="min-content"
          radius=".6rem"
        >
          <Wrapper padding="0" alignItems="center">
            <Text white fontSize=".8rem">
              {course.id}
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
              <Text white fontSize=".5rem">
                {course.credits}
              </Text>
            </Wrapper>
          </Wrapper>
        </Card>
      )}
    </Draggable>
  )
}
