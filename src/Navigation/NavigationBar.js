import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/">Ivy EXG</a>
         </Navbar.Brand>
         <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
         <Nav>
           <NavItem eventKey={1} href="/">Home</NavItem>
           <NavItem eventKey={2} href="/media">Media</NavItem>
           <NavItem eventKey={3} href="/forum">Forum</NavItem>
           <NavDropdown eventKey={4} title="About Us" id="basic-nav-dropdown">
             <MenuItem eventKey={4.1} href="/about/ivy_exg">Ivy EXG</MenuItem>
             <MenuItem eventKey={4.2} href='/about/creators'>Creators</MenuItem>
           </NavDropdown>

         </Nav>
       </Navbar.Collapse>
     </Navbar>
    );
  }
}
