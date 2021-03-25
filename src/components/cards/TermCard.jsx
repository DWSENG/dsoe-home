import { Card, SubHeading, Tag } from '../../styles/items'
import { Wrapper } from '../../styles/containers'

export default () => {
  return (
    <Card transform="1.005" width="400px">
      <Wrapper alignItems="center" justifyContent="space-around">
        <SubHeading sm>fall</SubHeading>
        <SubHeading sm>13 c</SubHeading>
        <SubHeading sm>2018</SubHeading>
      </Wrapper>
      <Wrapper
        droppable="true"
        flexWrap
        flex="1"
        alignItems="center"
        justifyContent="space-around"
      >
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
      </Wrapper>
    </Card>
  )
}
