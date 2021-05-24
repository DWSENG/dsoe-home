// card component for the terms in the plan page

import { Droppable } from 'react-beautiful-dnd'

import { Card, Text } from '../../styles/items'
import { Wrapper } from '../../styles/containers'
import PlanCourseCard from './PlanCourseCard'

export default ({ courses, listId }) => {
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0)

  const courseCards = courses.map((course, index) => (
    <PlanCourseCard course={course} key={index} index={index} />
  ))

  return (
    <Droppable droppableId={listId}>
      {(dropProvided) => (
        <Card
          padding="0"
          margin=".5rem"
          transform="1.005"
          flex="1 1 40%"
          height="min-content"
          minHeight
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
        >
          <Wrapper
            alignItems="center"
            justifyContent="space-around"
            margin=".5rem 0"
          >
            <Text>{listId}</Text>
            <Text>{totalCredits} credits</Text>
          </Wrapper>

          <Wrapper flexWrap alignItems="center" justifyContent="center">
            {courseCards}
            {dropProvided.placeholder}
          </Wrapper>
        </Card>
      )}
    </Droppable>
  )
}
