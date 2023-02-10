 import React from 'react'
 import './navigation.css'
 // Bootstrap styling
 import Navbar from 'react-bootstrap/Navbar'
 import Nav from 'react-bootstrap/Nav'
 // end Bootstrap styling
 import { navigationLinks} from '../../helpers/navigationLinks'

 function createLinks(){
  return navigationLinks.map((e, idx) => ( // iterate trhough the element e
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
 }
 
 function NavigationBar() {
   return (
     <div id='home'>
        <Navbar className='navigation_container'
        style={{zIndex: '2', position: 'fixed', top: '0', width: '100%'}}
        collapseOnSelect
        expand='md'>
        <Navbar.Brand style={{marginLeft: '1rem'}} href="#home">Elmo Max</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse style={{justifyContent: 'flex-end', marginRight: '1rem'}}>
          <Nav className='links' style={{margin: '0 1rem'}}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
        </Navbar>
     </div>
   )
 }
 
 export default NavigationBar
 