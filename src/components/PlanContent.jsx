import { useState } from 'react'
import store from '../store'
import { useProxy } from 'valtio'
import { DragDropContext } from 'react-beautiful-dnd'

import { Wrapper } from '../styles/containers'
import CourseList from '../components/CourseList'
import PlanTermCard from '../components/cards/PlanTermCard'
import { reorderTerms } from '../utils/dnd'

export default ({ setBeenEdited }) => {
  const { courses: coursesGlobal } = useProxy(store)
  const [terms, setTerms] = useState({
    remaining: coursesGlobal,
    term1: [],
    term2: [],
    term3: [],
    term4: [],
    term5: [],
    term6: [],
  })

  const onDragEnd = ({ destination, source }) => {
    // dropped outside list
    if (!destination) return

    setTerms(reorderTerms(terms, source, destination))
    setBeenEdited(true)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper height="100%" padding="1rem" scroll>
        <Wrapper
          flexWrap
          scroll
          shadow
          height="100%"
          flex="2"
          radius=".5rem"
          margin="0 1rem 1rem 0"
          justifyContent="space-around"
          alignItems="center"
        >
          {Object.entries(terms).map(
            ([key, value]) =>
              key != 'remaining' && (
                <PlanTermCard key={key} courses={value} listId={key} />
              )
          )}
        </Wrapper>
        {Object.entries(terms).map(
          ([key, value]) =>
            key === 'remaining' && (
              <CourseList key={key} listId={key} courses={value} />
            )
        )}
      </Wrapper>
    </DragDropContext>
  )
}
