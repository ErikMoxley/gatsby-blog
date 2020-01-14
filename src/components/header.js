import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <div className="container">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-left" navbar>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">Tags</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavbarBrand href="https://www.erikmoxley.me/">
                Erik Moxley
              </NavbarBrand>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
