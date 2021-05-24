// this is the plan content component
// terms list and courses list

import { useState, useEffect } from 'react'
import store from '../store'
import { useProxy } from 'valtio'
import { DragDropContext } from 'react-beautiful-dnd'

import { Wrapper } from '../styles/containers'
import CourseList from '../components/CourseList'
import PlanTermCard from '../components/cards/PlanTermCard'
import { reorderTerms } from '../utils/dnd'

export default ({ setBeenEdited, courses }) => {
  const [plan, setPlan] = useState({
    remaining: courses,
    spring1: [],
    fall1: [],
    spring2: [],
    fall2: [],
    spring3: [],
    fall3: [],
  })

  const onDragEnd = ({ destination, source }) => {
    // dropped outside list
    if (!destination) return

    setPlan(reorderTerms(plan, source, destination))
    setBeenEdited(true)
  }

  const terms = Object.entries(plan).map(
    ([key, value]) =>
      key != 'remaining' && (
        <PlanTermCard key={key} courses={value} listId={key} />
      )
  )
  const courseList = Object.entries(plan).map(
    ([key, value]) =>
      key === 'remaining' && (
        <CourseList key={key} listId={key} courses={value} />
      )
  )

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper height="100%" plan padding="0" scroll>
        <Wrapper
          flexWrap
          scroll
          height="100%"
          flex="2"
          justifyContent="space-around"
          alignItems="center"
        >
          {terms}
        </Wrapper>
        {courseList}
      </Wrapper>
    </DragDropContext>
  )
}
