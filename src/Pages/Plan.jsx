import store from '../store'
import { useProxy } from 'valtio'

import { Page, Wrapper } from '../styles/containers'
import { Title, Btn, Text, Card } from '../styles/items'
import TermCard from '../components/cards/TermCard'

export default () => {
  const { courses } = useProxy(store)

  return (
    <Page column>
      {/* heading */}
      <Wrapper padding="2rem 0 0 4rem" alignItems="center">
        <Title>Plan</Title>
      </Wrapper>
      {/* content wrapper */}
      <Wrapper padding="1rem 1rem 0 1rem" flex="1" scroll>
        {/* terms wrapper */}
        <Wrapper
          flexWrap
          margin="0 1rem 1rem 0"
          shadow
          radius=".75rem"
          flex="3"
          justifyContent="space-around"
          alignItems="space-around"
          max-height="100%"
          scroll
        >
          {/* terms title wrapper */}
          <Wrapper margin="1rem 0 0 2rem" width="100%">
            <Text fontSize="1.5rem">Terms</Text>
          </Wrapper>
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
          <TermCard />
        </Wrapper>
        {/* courses wrapper */}
        <Wrapper
          flexWrap
          shadow
          scroll
          radius=".75rem"
          margin="0 0 1rem 0"
          max-height="100%"
          flex="1"
        >
          {/* courses title wrapper */}
          <Wrapper width="100%" margin="1rem 0 0 2rem">
            <Text fontSize="1.5rem">Courses</Text>
          </Wrapper>
          {courses.map((course, key) => (
            <Card key={key} draggable="true" width="auto" height="auto">
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
