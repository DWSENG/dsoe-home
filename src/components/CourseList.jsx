import { Droppable } from 'react-beautiful-dnd'
import { Wrapper } from '../styles/containers'
import { Text } from '../styles/items'
import PlanCourseCard from './cards/PlanCourseCard'

export default ({ listId, courses }) => {
  return (
    <Droppable droppableId={listId}>
      {(dropProvided) => (
        <Wrapper
          flexWrap
          scroll
          shadow
          flex="1"
          radius=".75rem"
          height="100%"
          justifyContent="flex-start"
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <Text
            width="100%"
            textAlign="left"
            fontSize="1.5rem"
            margin="1rem 0 0 1rem"
          >
            courses remaining
          </Text>
          <Wrapper justifyContent="flex-start" flexWrap>
            {courses.map((course, index) => (
              <PlanCourseCard course={course} index={index} key={index} />
            ))}
            {dropProvided.placeholder}
          </Wrapper>
        </Wrapper>
      )}
    </Droppable>
  )
}
