import { useState } from 'react'
import store, { setPlan } from '../store'
import { useProxy } from 'valtio'
import { DragDropContext } from 'react-beautiful-dnd'
import { useQuery } from '@apollo/client'

import { Wrapper } from '../styles/containers'
import CourseList from '../components/CourseList'
import PlanTermCard from '../components/cards/PlanTermCard'
import { reorderTerms } from '../utils/dnd'
import { GET_COURSES } from '../api/queries'

export default ({ setBeenEdited }) => {
  const { plan } = useProxy(store)
  const { loading, error, data } = useQuery(GET_COURSES)

  const onDragEnd = ({ destination, source }) => {
    // dropped outside list
    if (!destination) return

    setPlan(reorderTerms(plan, source, destination))
    setBeenEdited(true)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper height="100%" padding="1rem">
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
          {Object.entries(plan).map(
            ([key, value]) =>
              key != 'remaining' && (
                <PlanTermCard key={key} courses={value} listId={key} />
              )
          )}
        </Wrapper>
        {Object.entries(plan).map(
          ([key, value]) =>
            key === 'remaining' && (
              <CourseList key={key} listId={key} courses={value} />
            )
        )}
      </Wrapper>
    </DragDropContext>
  )
}
