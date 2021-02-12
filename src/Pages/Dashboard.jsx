import React from 'react'
import styled from 'styled-components'

const Username = styled.h1`
  font-size: 40px;
`

export default () => (
  <>
    <Username>username</Username>

    <h6>advisor</h6>
    <h4>advisor name</h4>

    <input
      id="Button1"
      type="button"
      value="contact"
      onClick={() =>
        window.open(
          'mailto:magdavj@dunwoody.edu?subject=Subject&body=Body%20goes%20here'
        )
      }
    />
  </>
)
