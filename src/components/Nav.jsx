import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { RiDashboardFill, RiQuestionFill } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'

// styled components
const NavBar = styled.nav`
  height: 95vh;
  max-height: 95vh;
  max-width: 95vh;
  background: var(--main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 0.25em;
  margin: 0.5em 1em;
  box-shadow: var(--shadow-nav);
  transition: transform 350ms;
  &:hover {
    transform: scale(1.008);
  }
  @media (max-width: 768px) {
    height: min-content;
    flex-direction: row;
  }
`

const IconsContainer = styled.div`
  background: transparent;
  display: flex;
  flex: 0.25;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  padding: 0.5em;
  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`
const SettingsContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1em;
`
const NavBtn = styled.button`
  color: var(--light);
  background: transparent;
  border: none;
  padding: 0.75em 1em;
  margin-bottom: 3em;
  border-radius: 1em;
  transition: transform 350ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  /* border: 1px solid var(--light4); */

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    color: var(--main);
    background: var(--light);
    -webkit-box-shadow: var(--shadow-icon);
    -moz-box-shadow: var(--shadow-icon);
    box-shadow: var(--shadow-icon);
  }
  h3 {
    margin-left: 1em;
    font-size: 13px;
  }
  @media (max-width: 768px) {
    transition: all 500ms ease;
    margin: 0 1em;
  }
`
const SelectBtn = styled(NavBtn)`
  cursor: pointer;
  color: var(--main);
  background: var(--light);
  transition: transform 350ms;
  margin-bottom: 3em;
  -webkit-box-shadow: var(--shadow-icon);
  -moz-box-shadow: var(--shadow-icon);
  box-shadow: var(--shadow-icon);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    margin: 0 1em;
  }
`

const Logo = styled.img`
  height: 30px;
  margin: 1em 1em 2em 1em;
  transition: transform 350ms;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    margin: 0.5em;
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
        <Logo
          src="https://dunwoody.edu/wp-content/uploads/2018/04/Logo_Final_White-web.png"
          alt="Dunwoody"
        />
        {selected === 'dashboard' ? (
          <SelectBtn onClick={() => handleNav('dashboard')}>
            <RiDashboardFill size={iconSize} />
            <h3>dashboard</h3>
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('dashboard')}>
            <RiDashboardFill size={iconSize} />
            <h3>dashboard</h3>
          </NavBtn>
        )}
        {selected === 'courses' ? (
          <SelectBtn onClick={() => handleNav('courses')}>
            <MdClass size={iconSize} />
            <h3>courses</h3>
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('courses')}>
            <MdClass size={iconSize} />
            <h3>courses</h3>
          </NavBtn>
        )}
        {selected === 'plan' ? (
          <SelectBtn onClick={() => handleNav('plan')}>
            <FaGraduationCap size={iconSize} />
            <h3>plan</h3>
          </SelectBtn>
        ) : (
          <NavBtn onClick={() => handleNav('plan')}>
            <FaGraduationCap size={iconSize} />
            <h3>plan</h3>
          </NavBtn>
        )}
      </IconsContainer>
      <SettingsContainer>
        {selected === 'about' ? (
          <SelectBtn
            style={{ cursor: 'help' }}
            onClick={() => handleNav('about')}
          >
            <RiQuestionFill size={iconSize} />
          </SelectBtn>
        ) : (
          <NavBtn style={{ cursor: 'help' }} onClick={() => handleNav('about')}>
            <RiQuestionFill size={iconSize} />
          </NavBtn>
        )}
      </SettingsContainer>
    </NavBar>
  )
}
