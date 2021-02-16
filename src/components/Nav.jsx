import { NavBar, IconsContainer, SettingsContainer } from '../styles/containers'
import { NavBtn, SelectBtn, Logo } from '../styles/items'
import { useHistory } from 'react-router-dom'
import { RiDashboardFill, RiQuestionFill } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'
import logo from '../images/logo-white.png'

export default ({ page, setPage }) => {
  const iconSize = 20
  const history = useHistory()

  const handleNav = (page) => {
    setPage(`${page}`)
    if (page === 'landing') {
      history.push('/')
    } else {
      history.push(`/${page}`)
    }
  }

  return (
    <NavBar>
      <IconsContainer>
        <Logo src={logo} alt="Dunwoody" onClick={() => handleNav('landing')} />
        {page === 'dashboard' ? (
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
        {page === 'courses' ? (
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
        {page === 'plan' ? (
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
        {page === 'about' ? (
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
