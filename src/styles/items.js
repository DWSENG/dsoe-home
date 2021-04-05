import styled, { css } from 'styled-components'

/* ******************************** BUTTONS ******************************** */
export const Btn = styled.button`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.pri};
  transition: transform 250ms;
  font-size: 1rem;
  border: none;
  padding: 0.75em 1.25em;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: ${({ theme }) => theme.shadow.sm};
  -moz-box-shadow: ${({ theme }) => theme.shadow.sm};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  &:hover,
  &:focus {
    -webkit-box-shadow: ${({ theme }) => theme.shadow.md};
    -moz-box-shadow: ${({ theme }) => theme.shadow.md};
    box-shadow: ${({ theme }) => theme.shadow.md};
    transform: scale(1.03);
    outline: none;
  }
  // SECONDARY BTN
  ${({ secondary }) =>
    secondary &&
    css`
      background: ${({ theme }) => theme.colors.sec};
    `}
  ${({ secondaryDisabled }) =>
    secondaryDisabled &&
    css`
      background: ${({ theme }) => theme.colors.sec2};
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      cursor: auto;
      &:hover {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        transform: scale(1);
      }
    `}
  
  // TERTIARY BTN
  ${({ tertiary }) =>
    tertiary &&
    css`
      background: ${({ theme }) => theme.colors.ter};
    `}
  // GREEN BTN
  ${({ green }) =>
    green &&
    css`
      background: ${({ theme }) => theme.colors.required};
    `}
  // ALT BTN
  ${({ invert }) =>
    invert &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.pri};
      position: absolute;
      bottom: 1em;
      right: 1em;
    `}
  // NAV BTNs
  ${({ nav }) =>
    nav &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
      width: auto;
      height: auto;
      padding: 1rem;
      margin-bottom: 1rem;
      justify-content: left;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      &:hover,
      &:focus {
        outline: none;
        transform: scale(1.05);
        color: ${({ theme }) => theme.colors.pri};
        background: ${({ theme }) => theme.colors.white};
      }
      h3 {
        margin-left: 1rem;
        font-size: 13px;
        @media ${({ theme }) => theme.media.mobile} {
          display: none;
        }
      }
      @media ${({ theme }) => theme.media.tablet} {
        margin: 0 0.5em;
      }
    `}
  ${({ navSelected }) =>
    navSelected &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.pri};
      width: auto;
      padding: 1rem;
      margin-bottom: 1rem;
      justify-content: left;
      -webkit-box-shadow: ${({ theme }) => theme.shadow.sm};
      -moz-box-shadow: ${({ theme }) => theme.shadow.sm};
      box-shadow: ${({ theme }) => theme.shadow.sm};
      &:hover,
      &:focus {
        outline: none;
        transform: scale(1.05);
      }
      h3 {
        margin-left: 1em;
        font-size: 13px;
        @media ${({ theme }) => theme.media.mobile} {
          display: none;
        }
      }
      @media ${({ theme }) => theme.media.tablet} {
        margin: 0 0.5em;
      }
    `}
`
/* ******************************** TEXT ******************************** */
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 3rem;
  ${({ xl }) =>
    xl &&
    css`
      font-size: 4rem;
    `}
  ${({ md }) =>
    md &&
    css`
      font-size: 2rem;
    `}
  ${({ sm }) =>
    sm &&
    css`
      font-size: 1.5rem;
    `}
  ${({ xs }) =>
    xs &&
    css`
      font-size: 0.5rem;
    `}
  ${({ landing }) =>
    landing &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ whoops }) =>
    whoops &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`
export const SubHeading = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  ${({ xl }) =>
    xl &&
    css`
      font-size: 3rem;
    `}
  ${({ lg }) =>
    lg &&
    css`
      font-size: 2rem;
    `}
  ${({ sm }) =>
    sm &&
    css`
      font-size: 1rem;
    `}
    ${({ landing }) =>
    landing &&
    css`
      color: ${({ theme }) => theme.colors.pri2};
      padding-left: 2rem;
    `}
    ${({ courseCard }) =>
    courseCard &&
    css`
      margin: 0.5rem 0 0 0.5rem;
    `}
`
export const Text = styled.p`
  color: ${({ theme, color }) => color || theme.colors.dark};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  margin: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || 'auto'};
  text-align: ${({ textAlign }) => textAlign || 'normal'};
  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.colors.pri};
    `}
  ${({ logo }) =>
    logo &&
    css`
      font-family: Paciencia;
      display: none;
      cursor: pointer;
      @media ${({ theme }) => theme.media.mobile} {
        display: inline;
      }
    `}
    ${({ white }) =>
    white &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
    ${({ light }) =>
    light &&
    css`
      color: ${({ theme }) => theme.colors.light};
    `}
`
/* ******************************** IMGS ******************************** */
export const Img = styled.img`
  height: 2rem;
  margin-bottom: 3rem;
  transition: transform 250ms;
  &:hover,
  &:focus {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 0;
    margin-right: 3rem;
    margin-left: 3rem;
  }
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`
/* ******************************** INPUT ******************************** */
export const Input = styled.input.attrs(({ type, name }) => ({
  type: type || 'text',
  name: name || '',
}))`
  outline: none;
  background: rgba(0, 0, 0, 0);
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  border: ${({ theme, border }) =>
    border ? `2px solid ${theme.colors.pri}` : 'none'};
  border-radius: 0.5rem;
  overflow: hidden;
  padding: ${({ padding }) => padding || '.5rem'};

  ${({ modal }) =>
    modal &&
    css`
      color: ${({ theme }) => theme.colors.dark};
      background: ${({ theme }) => theme.colors.white};
      &::placeholder {
        color: ${({ theme }) => theme.colors.light};
      }
    `};
`
export const TextArea = styled.textarea.attrs(({ type, name }) => ({
  type: type || 'text',
  name: name || '',
}))`
  max-width: 20rem;
  max-height: 8rem;
  outline: none;
  background: transparent;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  border: ${({ theme, border }) =>
    border ? `2px solid ${theme.colors.pri}` : 'none'};
  border-radius: 0.5rem;
  overflow: hidden;
  padding: ${({ padding }) => padding || '.5rem'};

  ${({ modal }) =>
    modal &&
    css`
      border: ${({ theme }) => `2px solid ${theme.colors.white}`};
      color: ${({ theme }) => theme.colors.dark};
      background: ${({ theme }) => theme.colors.white};
      &::placeholder {
        color: ${({ theme }) => theme.colors.light};
      }
    `};
`
export const Label = styled.label`
  font-size: 1rem;
  padding: 0.5rem;
  margin-left: 1rem;
  ${({ modal }) =>
    modal &&
    css`
      color: ${({ theme }) => theme.colors.dark};
    `};
`
export const Card = styled.article`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  width: ${({ width }) => width || '200px'};
  min-width: ${({ minWidth }) => minWidth && minWidth};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  height: ${({ height }) => height || '200px'};
  min-height: ${({ minHeight }) => minHeight && '100px'};
  background: ${({ theme, background }) => background || theme.colors.white};
  border-radius: ${({ radius, theme }) => radius || theme.radius.md};
  padding: ${({ padding }) => padding || '1rem'};
  margin: ${({ margin }) => margin || '1rem'};

  display: flex;
  flex: ${({ flex }) => flex && flex};
  justify-content: space-between;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  -webkit-box-shadow: ${({ theme, selected }) =>
    selected ? theme.shadow.pri : theme.shadow.sm};
  -moz-box-shadow: ${({ theme, selected }) =>
    selected ? theme.shadow.pri : theme.shadow.sm};
  box-shadow: ${({ theme, selected }) =>
    selected ? theme.shadow.pri : theme.shadow.sm};
  transition: transform 250ms;
  overflow: ${({ scroll }) => (scroll ? 'scroll' : 'hidden')};
  border: ${({ border }) => border || 'none'};
  transform: ${({ selected }) => selected && 'scale(1.03)'};

  &:hover,
  &:focus {
    transform: ${({ transform }) =>
      transform ? `scale(${transform})` : 'scale(1.03)'};
    -webkit-box-shadow: ${({ theme }) => theme.shadow.pri};
    -moz-box-shadow: ${({ theme }) => theme.shadow.pri};
    box-shadow: ${({ theme }) => theme.shadow.pri};
  }
  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.pri};
    `}
  ${({ purple }) =>
    purple &&
    css`
      background: ${({ theme }) => theme.colors.required};
    `}
  ${({ green }) =>
    green &&
    css`
      background: ${({ theme }) => theme.colors.elective};
    `}
  @media ${({ theme }) => theme.media.mobile} {
    min-width: ${({ minWidth }) => minWidth && '100px'};
  }
`
export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.15rem 0.4rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.elective};
  width: max-content;
  border: 2px solid ${({ theme }) => theme.colors.elective};
  ${({ required }) =>
    required &&
    css`
      background: ${({ theme }) => theme.colors.required};
      border: 2px solid ${({ theme }) => theme.colors.required};
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ credits }) =>
    credits &&
    css`
      background: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.pri};
      color: ${({ theme }) => theme.colors.pri};
    `};
`

export const A = styled.a.attrs(({ href }) => ({
  target: '_blank',
  href: href,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pri};
`
