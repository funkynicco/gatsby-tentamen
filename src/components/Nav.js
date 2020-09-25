import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"
import { NavButton } from "../components"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "saab-logo.png" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
      <NavButton to="/">
        Home
      </NavButton>
      <NavButton to="/">
        Articles
      </NavButton>
      <NavButton to="/">
        Media
      </NavButton>
      <NavButton to="/">
        Links
      </NavButton>
    </NavWrapper>
  )
}
