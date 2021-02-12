import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { RiDashboardFill, RiQuestionFill } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'

// styled components
const NavBar = styled.nav`
  height: 95vh;
  background: var(--main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 0.25em;
  margin: 0.5em 1em;
  box-shadow: var(--shadow-nav);
`
const IconsContainer = styled.nav`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  flex: 0.4;
  padding: 0.5em;
  margin-top: 2em;
`
const SettingsContainer = styled.nav`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
  flex: 0.08;
`
const NavBtn = styled.button`
  color: var(--light);
  background: transparent;
  border: none;
  padding: 1em 2em;
  margin: 0.25em;
  border-radius: 0.5em;
  transition: transform 350ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    color: var(--main);
    background: var(--light);
    -webkit-box-shadow: var(--shadow-icon);
    -moz-box-shadow: var(--shadow-icon);
    box-shadow: var(--shadow-icon);
  }
  p {
    margin-left: 1em;
  }
`
const SelectBtn = styled(NavBtn)`
  cursor: pointer;
  color: var(--main);
  background: var(--light);
  transition: transform 350ms;
  -webkit-box-shadow: var(--shadow-icon);
  -moz-box-shadow: var(--shadow-icon);
  box-shadow: var(--shadow-icon);
  &:hover {
    transform: scale(1.05);
  }
`

// Nav component
export default ({ selected, setSelected }) => {
  const iconSize = 20
  const history = useHistory()

  const handleNav = (page) => {
    setSelected(`${page}`)
    if (page === 'dashboard') {
      history.push('/')
    } else {
      history.push(`/${page}`)
    }
  }

  return (
    <NavBar>
      <IconsContainer>
        {selected === 'dashboard' ? (
          <SelectBtn onClick={() => handleNav('dashboard')}>
            <RiDashboardFill size={iconSize} />
            <p>dashboard</p>
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('dashboard')}>
            <RiDashboardFill size={iconSize} />
            <p>dashboard</p>
          </NavBtn>
        )}
        {selected === 'courses' ? (
          <SelectBtn onClick={() => handleNav('courses')}>
            <MdClass size={iconSize} />
            <p>courses</p>
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('courses')}>
            <MdClass size={iconSize} />
            <p>courses</p>
          </NavBtn>
        )}
        {selected === 'plan' ? (
          <SelectBtn onClick={() => handleNav('plan')}>
            <FaGraduationCap size={iconSize} />
            <p>plan</p>
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('plan')}>
            <FaGraduationCap size={iconSize} />
            <p>plan</p>
          </NavBtn>
        )}
      </IconsContainer>
      <SettingsContainer>
        {selected === 'about' ? (
          <SelectBtn onClick={() => handleNav('about')}>
            <RiQuestionFill size={iconSize} />
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('about')}>
            <RiQuestionFill size={iconSize} />
          </NavBtn>
        )}
      </SettingsContainer>
    </NavBar>
  )
}
