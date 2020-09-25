import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const NavButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.75rem 1.75rem;
  background-color: ${props => props.theme.colors.main1};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.light1};
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;
  height: 40px;
  margin-top: 30px;

  &:hover,
  &:focus {
    filter: brightness(110%);
  }

  @media ${props => props.theme.breakpoints.mobile} {
      border-radius: 0;
      margin: 3px 0 3px 0;
      width: 100%;
  }
`
