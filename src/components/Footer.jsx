import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
    <div className='footer-content d-flex justify-content-between'>
    <div className='guides  d-flex flex-column'>
       <h5>FAQS</h5>
       <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>Investors relation</a>
         <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>privacy </a>
         <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>speed test</a>

     </div>
     <div className='links d-flex flex-column'>
       <h5>Links</h5>
       <Link to={'/'} style={{textDecoration:"none",color:'white'}}>Landing page</Link>
       <Link to={'/home'} style={{textDecoration:"none",color:'white'}}>Home page</Link>
       <Link to={'/watch'} style={{textDecoration:"none",color:'white'}}>Watch History</Link>

     </div>
     <div className='guides  d-flex flex-column'>
       <h5>Guides</h5>
       <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>help center</a>
         <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>Job cookies</a>
         <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>preference</a>

     </div>
     <div className='contact'>
       <h5>Contact Us</h5>
       <div className="d-flex">
             <input type="text" className='form-control me-1' placeholder='Email id Please' />
             <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
         </div>
         <div className='icons d-flex justify-content-between mt-3'>
           <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-twitter fa-1x'></i></a>
           <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-instagram fa-1x'></i></a>
           <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-facebook fa-1x'></i></a>
           <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-linkedin fa-1x'></i></a>
           <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-github fa-1x'></i></a>
           <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-solid fa-phone fa-1x'></i></a>

         </div>
     </div>
    </div>
    <p className='text-center mt-5'>Copyright &copy;2023 NETFLIX </p>
 </div>
  )
}

export default Footer