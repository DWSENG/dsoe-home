import store from '../store'
import { useProxy } from 'valtio'

import { Page, Wrapper } from '../styles/containers'
import { Title, SubHeading, Btn, Text, Card } from '../styles/items'
import TermCard from '../components/TermCard'

export default () => {
  const { courses } = useProxy(store)

  // const dragStart = (evt) => {
  //   evt.dataTransfer.setData('text', evt.target.firstChild.innerText)
  // }
  // const dragEnd = (evt) => {
  //   // evt.dataTransfer.setData('text', (evt.target.style.background = 'white'))
  // }
  // const drag = (evt) => {
  //   // evt.dataTransfer.setData('text', (evt.target.style.background = 'blue'))
  // }
  // const dragOver = (evt) => {
  //   evt.preventDefault()
  // }
  // const drop = (evt) => {
  //   evt.preventDefault()
  //   console.log(evt.dataTransfer.getData('text'))
  // }

  return (
    <Page column>
      <Wrapper padding alignItems="center">
        <Title>Plan</Title>
      </Wrapper>

      <Wrapper
        padding
        flex="1"
        alignItems="center"
        justifyContent="space-between"
      >
        <Wrapper
          flexWrap
          marginR="1.5rem"
          shadow
          scroll
          height="100%"
          flex="3"
          justifyContent="center"
          alignItems="space-around"
        >
          <Wrapper
            marginT="1rem"
            marginL="2rem"
            width="100%"
            height="min-content"
          >
            <SubHeading>Terms</SubHeading>
          </Wrapper>
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
        </Wrapper>
        <Wrapper flexWrap shadow height="100%" flex="1.5">
          <Wrapper
            marginT="1rem"
            marginL="2rem"
            width="100%"
            height="min-content"
          >
            <SubHeading>Courses</SubHeading>
          </Wrapper>
          {courses.map((course, key) => (
            <Card
              key={key}
              draggable="true"
              width="auto"
              height="auto"
              // transform="1.01"
              // onDragStart={dragStart}
              // onDragEnd={dragEnd}
              // onDrag={drag}
              // onDragOver={dragOver}
              // onDrop={drop}
            >
              <Text>{course.title}</Text>
              <Wrapper alignItems="center" justifyContent="space-around">
                <Text primary fontSize=".75rem">
                  {course.id}
                </Text>
                <Text fontSize=".75rem">{course.credits}</Text>
              </Wrapper>
            </Card>
          ))}
        </Wrapper>
      </Wrapper>
    </Page>
  )
}
