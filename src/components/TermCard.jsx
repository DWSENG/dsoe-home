import { Card, SubHeading, Tag } from '../styles/items'
import { Wrapper } from '../styles/containers'

export default () => {
  const drop = (evt) => {
    evt.preventDefault()
    console.log(evt.dataTransfer.getData('text'))
  }
  const dragOver = (evt) => {
    evt.preventDefault()
    evt.target.parentElement.style.background = '#9e2933'
  }
  const dragEnter = (evt) => {
    evt.target.parentElement.style.background = '#9e2933'

    console.log(evt)
  }
  const dragLeave = (evt) => {
    evt.target.parentElement.style.background = 'white'
  }
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
        onDrop={drop}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
      >
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
        <Tag>class</Tag>
      </Wrapper>
    </Card>
  )
}
