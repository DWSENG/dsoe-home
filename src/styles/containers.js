import styled, { css } from 'styled-components'

export const AppContainer = styled.main`
  background: transparent;
  max-width: 100vw;
  min-width: 360px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.5rem;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex: ${({ flex }) => (flex ? flex : '0 1 auto')};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'nowrap')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'normal')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'normal'};

  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-radius: ${({ radius }) => (radius ? radius : '0')};
  overflow: ${({ scroll }) => (scroll ? 'auto' : 'visible')};
  box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadow.sm : '0')};
  -webkit-box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.shadow.sm : '0'};
  -moz-box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadow.sm : '0')};
  transition: box-shadow 200ms;

  &:hover {
    -webkit-box-shadow: ${({ theme, hover }) =>
      hover ? theme.shadow.md : '0'};
    -moz-box-shadow: ${({ theme, hover }) => (hover ? theme.shadow.md : '0')};
    box-shadow: ${({ theme, hover }) => (hover ? theme.shadow.md : '0')};
  }

  ${({ nav }) =>
    nav &&
    css`
      align-items: left;
      justify-content: center;
      @media ${({ theme }) => theme.media.tablet} {
        flex-direction: row;
        align-items: center;
      }
    `}

  ${({ marginT }) =>
    marginT &&
    css`
      margin-top: ${marginT};
    `}
  ${({ marginB }) =>
    marginB &&
    css`
      margin-bottom: ${marginB};
    `}
  ${({ marginL }) =>
    marginL &&
    css`
      margin-left: ${marginL};
    `}
  ${({ marginR }) =>
    marginR &&
    css`
      margin-right: ${marginR};
    `}
`
export const Page = styled.section`
  flex: 1;
  display: ${({ display }) => (display ? display : 'flex')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : '0')};
  position: relative;
  height: 100vh;
  width: auto;
  max-width: 1919px;
  min-width: 320px;
  overflow: auto;

  @media ${({ theme }) => theme.media.tablet} {
    height: auto;
    width: 100vw;
  }
`
export const NavBar = styled.nav`
  height: 100%;
  width: auto;
  background: ${({ theme }) => theme.colors.pri};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  overflow: scroll;
  @media ${({ theme }) => theme.media.tablet} {
    height: auto;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const LandingContainer = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.pri};
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`
