import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

export const Container = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg-gripen.jpg" }) {
        publicURL
      }
    }
  `)

  return (
    <ContainerWrapper css={`
        background: url(${data.bg.publicURL}) no-repeat center center fixed;
      `}>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
