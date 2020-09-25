import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-row: 2 / span 5;
  grid-column: 2 / span 12;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  display: flex;
  justify-content: space-between;
  opacity: 0.85;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-row: 3 / span 4;
    grid-column: 1 / span 8;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    
    display: block;
  }
`
