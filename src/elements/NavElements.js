import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: space-evenly;
  justify-content: space-between;

  img {
    height: 100px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1 / span 8;
    grid-row: 1 / span 2;

    display: block;

    & > img {
      height: 50px;
    }

    & > * {
      display: block;
    }
  }
`
