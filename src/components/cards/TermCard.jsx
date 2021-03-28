import { Droppable } from 'react-beautiful-dnd'

import { Card, Text } from '../../styles/items'
import { Wrapper } from '../../styles/containers'
import PlanCourseCard from './PlanCourseCard'

export default ({ term }) => {
  return (
    <Card transform="1.005" width="40%" minWidth height="min-content" minHeight>
      <Wrapper alignItems="center" justifyContent="space-around">
        <Text fontSize="1.5rem">{term.season}</Text>
        <Text>{term.credits} c</Text>
        <Text fontSize="1.5rem">{term.year}</Text>
      </Wrapper>
      <Wrapper alignItems="center" justifyContent="space-around" flexWrap>
        {term.courses.map((course, index) => (
          <PlanCourseCard course={course} key={index} index={index} />
        ))}
      </Wrapper>
    </Card>
  )
}
