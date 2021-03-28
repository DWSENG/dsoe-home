import { useState } from 'react'
import { NavBar, Wrapper } from '../styles/containers'
import { Btn } from '../styles/items'
import Logo from './Logo'
import { useHistory } from 'react-router-dom'
import { RiDashboardFill, RiQuestionFill } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { MdClass } from 'react-icons/md'

export default () => {
  const iconSize = 20
  const [page, setPage] = useState('dashboard')
  const history = useHistory()

  const handleNav = (page) => {
    setPage(`${page}`)
    if (page === 'dashboard') {
      history.push('/')
    } else {
      history.push(`/${page}`)
    }
  }

  return (
    <NavBar>
      <Wrapper nav column>
        <Logo handleNav={handleNav} />
        {page === 'dashboard' ? (
          <Btn navSelected onClick={() => handleNav('dashboard')}>
            <RiDashboardFill size={iconSize} />
            <h3>dashboard</h3>
          </Btn>
        ) : (
          <Btn nav onClick={() => handleNav('dashboard')}>
            <RiDashboardFill size={iconSize} />
            <h3>dashboard</h3>
          </Btn>
        )}
        {page === 'courses' ? (
          <Btn navSelected onClick={() => handleNav('courses')}>
            <MdClass size={iconSize} />
            <h3>courses</h3>
          </Btn>
        ) : (
          <Btn nav onClick={() => handleNav('courses')}>
            <MdClass size={iconSize} />
            <h3>courses</h3>
          </Btn>
        )}
        {page === 'plan' ? (
          <Btn navSelected onClick={() => handleNav('plan')}>
            <FaGraduationCap size={iconSize} />
            <h3>plan</h3>
          </Btn>
        ) : (
          <Btn nav onClick={() => handleNav('plan')}>
            <FaGraduationCap size={iconSize} />
            <h3>plan</h3>
          </Btn>
        )}
      </Wrapper>
      {page === 'about' ? (
        <Btn
          navSelected
          nav
          style={{ cursor: 'help' }}
          onClick={() => handleNav('about')}
        >
          <RiQuestionFill size={iconSize} />
        </Btn>
      ) : (
        <Btn nav style={{ cursor: 'help' }} onClick={() => handleNav('about')}>
          <RiQuestionFill size={iconSize} />
        </Btn>
      )}
    </NavBar>
  )
}
