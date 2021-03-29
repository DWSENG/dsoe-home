import { Droppable } from 'react-beautiful-dnd'

import { Card, Text } from '../../styles/items'
import { Wrapper } from '../../styles/containers'
import PlanCourseCard from './PlanCourseCard'

export default ({ courses, listId }) => {
  return (
    <Droppable droppableId={listId}>
      {(dropProvided) => (
        <Card
          padding="0"
          margin=".5rem"
          transform="1.005"
          width="40%"
          minWidth
          height="min-content"
          minHeight
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <Text width="100%" margin=".5rem 0 0 0" fontSize="1.5rem">
            {listId}
          </Text>
          <Wrapper flexWrap alignItems="center" justifyContent="center">
            {courses.map((course, index) => (
              <PlanCourseCard course={course} key={index} index={index} />
            ))}
            {dropProvided.placeholder}
          </Wrapper>
        </Card>
      )}
    </Droppable>
  )
}
