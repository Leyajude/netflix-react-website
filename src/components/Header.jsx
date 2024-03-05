import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className='bg-dark' style={{width:'100%', height:'75px'}}>
       <Container>
          <Link to={'/'} style={{textDecoration:'none'}} >
          <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'red'}}>
          <i class="fa-solid fa-film fa-2xl me-2"></i>
          <i className=" fa-sharp fa-solid fa-n fa-2xl me-2"></i>
          {' '}
          ETFLIX
          </Navbar.Brand>
          </Link>
        </Container>
    </Navbar>
  )
}

export default Header