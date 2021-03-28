import { useState } from 'react'
import store, { addCourse } from '../store'
import { useProxy } from 'valtio'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text } from '../styles/items'
import PlanTermCard from '../components/cards/PlanTermCard'
import PlanCourseCard from '../components/cards/PlanCourseCard'

export default () => {
  const { courses, terms } = useProxy(store)
  const [beenEdited, setBeenEdited] = useState(false)
  const [allTerms, setAllTerms] = useState(terms)
  const [allCourses, setAllCourses] = useState(courses)

  // const onDragEnd = ({ draggableId, type, reason, source, destination }) => {
  //   if (!destination) return

  //   if (destination.droppableId === source.droppableId) return

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return
  //   }

  //   // addCourse(allCourses.filter((course, index) => index !== source.index))

  //   console.log(source)
  //   console.log(destination)
  //   console.log(`hellooooooo${draggableId}`)
  //   console.log(allCourses)
  //   setAllCourses()
  //   // coursesLeft.splice(destination.index, 0, draggableId)
  //   setBeenEdited(true)
  // }

  return (
    <Page column>
      {/* heading */}
      <Wrapper
        padding="2rem 4rem 1rem 4rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Title>Plan</Title>
        {beenEdited && <Btn secondary>save</Btn>}
      </Wrapper>
      {/* content wrapper */}
      <Wrapper padding="1rem 1rem 0 1rem" height="100%" scroll flex="1">
        {/* terms wrapper */}
        <Wrapper
          flexWrap
          margin="0 1rem 1rem 0"
          shadow
          radius=".75rem"
          flex="2"
          justifyContent="center"
          alignItems="center"
          max-height="100%"
          width="max-content"
          scroll
        >
          {/* terms title wrapper */}
          <Wrapper margin="1rem 0 0 2rem">
            <Text fontSize="1.5rem">Terms</Text>
          </Wrapper>
          {allTerms.map((term, index) => (
            <PlanTermCard key={index} term={term} index={index} />
          ))}
        </Wrapper>
        {/* courses wrapper */}
        <Wrapper
          flexWrap
          shadow
          radius=".75rem"
          margin="0 0 1rem 0"
          justifyContent="center"
          alignItems="center"
          max-height="100%"
          width="max-content"
          flex="1"
          scroll
        >
          {/* courses title wrapper */}
          <Wrapper width="100%" height="min-content" margin="1rem 0 0 2rem">
            <Text fontSize="1.5rem">Courses</Text>
          </Wrapper>
          {allCourses.map((course, index) => (
            <PlanCourseCard course={course} key={index} index={index} />
          ))}
        </Wrapper>
      </Wrapper>
    </Page>
  )
}
