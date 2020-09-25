import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  width: 400px;
  padding: 1rem;

  @media ${props => props.theme.breakpoints.mobile} {
    width: auto;
  }
`
