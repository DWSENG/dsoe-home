// Page header components for consistent page headers
import { Title, Btn } from '../styles/items'
import { Wrapper } from '../styles/containers'

export default ({ title, btn, btnTitle, btnCondition }) => {
  return (
    <Wrapper
      padding="2rem 4rem .5rem 4rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Title>{title}</Title>
      {btn && btnCondition && <Btn secondary>{btnTitle}</Btn>}
    </Wrapper>
  )
}
