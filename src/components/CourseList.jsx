// Course list component used in the plan
// droppable component

import { Droppable } from 'react-beautiful-dnd'
import { Wrapper } from '../styles/containers'
import { Text } from '../styles/items'
import PlanCourseCard from './cards/PlanCourseCard'

export default ({ listId, courses }) => {
  const creditsRemaining = courses.reduce(
    (acc, { credits }) => acc + credits,
    0
  )

  return (
    <Droppable droppableId={listId}>
      {(dropProvided) => (
        <Wrapper
          flexWrap
          scroll
          shadow
          radius=".75rem"
          height="auto"
          width="auto"
          flex="1"
          alignItems="flex-start"
          courseList
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <Wrapper
            width="100%"
            alignItems="center"
            margin=".5rem 0 0 0"
            justifyContent="space-around"
          >
            <Text textAlign="center" fontSize="1rem">
              {courses.length} courses remaining
            </Text>
            <Text fontSize=".75rem" textAlign="center">
              {creditsRemaining} credits
            </Text>
          </Wrapper>
          <Wrapper justifyContent="space-around" alignItems="center" flexWrap>
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
