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
  padding: 0.5rem 0 0.5rem 0.5rem;
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex: ${({ flex }) => flex || '0 1 auto'};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? 'wrap' : 'nowrap')};
  align-items: ${({ alignItems }) => alignItems || 'normal'};
  justify-content: ${({ justifyContent }) => justifyContent || 'normal'};
  background: ${({ background }) => background || 'transparent'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  border-radius: ${({ radius }) => radius || '0'};
  overflow: ${({ scroll }) => (scroll ? 'auto' : 'visible')};
  box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadow.sm : 'none')};
  -webkit-box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.shadow.sm : '0'};
  -moz-box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadow.sm : '0')};
  transition: box-shadow 200ms;
  border: ${({ border }) => border || 'none'};

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
  ${({ credit }) =>
    credit &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.white}
      }
    `}
  ${({ glass }) =>
    glass &&
    css`
      background: rgba( 158, 41, 51, 0.25 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 3px );
      -webkit-backdrop-filter: blur( 3px );
      }
    `}
`
export const Page = styled.section`
  flex: 1;
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: center;
  padding: ${({ padding }) => padding || '0'};
  position: relative;
  height: 100%;
  width: auto;
  max-width: 1919px;
  min-width: 320px;
  overflow: ${({ scroll }) => (scroll ? 'auto' : 'hidden')};

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
export const modalStyles = {
  content: {
    margin: 'auto',
    width: 'max-content',
    minWidth: '50%',
    maxWidth: '90%',
    height: 'max-content',
    maxHeight: '90%',
    position: 'absolute',
    borderRadius: '1em',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // background: 'rgba( 158, 41, 51, 0.3 )',
    background: 'rgba( 255, 255, 255, 0.5 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 5.0px )',
    WebkitBackdropFilter: 'blur( 5.0px )',
  },
  overlay: {
    background: 'transparent',
  },
}
