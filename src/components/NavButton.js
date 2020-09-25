import React from "react"
import { NavButtonWrapper } from "../elements"

export const NavButton = ({ children, href }) => {
  // Note the link, dont forget to add "/" + before href in the ButtonWrapper
  return <NavButtonWrapper to={"/" + href}>{children}</NavButtonWrapper>
}
