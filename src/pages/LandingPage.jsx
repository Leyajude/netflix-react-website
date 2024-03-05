import React from 'react'
import  './LandingPage.css'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const navigate= useNavigate()
  const handleNavigate=()=>{
    navigate('/home')
  }
  return (
     <div className='tt'>
          <div className='div1'>
          <div class="div2 div2a ">
                    <p class="hed text-center ">
                        Welcome Back!
                    </p>
                    <h2 class="hd">Unlimited movies, TV shows and more</h2>
                <button onClick={handleNavigate} className='btn btn-danger but'>Get Started</button>
                </div>
       </div>
       <div className='mt-5'>
       <div className="header row align-items-center m-5">
        <div className="col-lg-5">
         <h3><b>Enjoy on your TV </b></h3> 
          <p style={{textAlign:'justify' ,fontSize:'35px'}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.

!</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Landing image" />
        </div>
      </div>
       </div>
       <div className='mt-5'>
      <div className='header row align-items-center m-5'>
        <div className="col-lg-5">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Landing image" />
        </div>
        <div className="col-lg-1"></div>

        <div className="col-lg-6">
         <h3 className='' style={{fontSize:'65px'}}><b>Download your shows to watch offline </b></h3> 
          <p style={{textAlign:'justify' ,fontSize:'20px'}}> Save your favourites easily and always have something to watch.

!</p>
        </div>
      </div>
       </div>
       <div>
       <div className='mt-5'>
       <div className="header row align-items-center m-5">
        <div className="col-lg-5">
         <h3><b>Watch everywhere </b></h3> 
          <p style={{textAlign:'justify' ,fontSize:'35px'}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV..

!</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="Landing image" />
        </div>
      </div>
       </div>
       </div>
       <div>
       <div className='header row align-items-center m-5'>
        <div className="col-lg-5">
          <img src="https://occ-0-4157-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="Landing image" />
        </div>
        <div className="col-lg-1"></div>

        <div className="col-lg-6">
         <h3 className='' style={{fontSize:'65px'}}><b>Create profiles for kids </b></h3> 
          <p style={{textAlign:'justify' ,fontSize:'20px'}}> Send children on adventures with their favourite characters in a space made just for them—free with your membership..

!</p>
        </div>
      </div>
       </div>
       <br />
        <h3 className='text-center'><b>Frequently Asked Questions</b>
        </h3>
        <br />
        <div className='row  m-5'>

        <div className='col-l-1'></div>
        <div className='col-lg-10'>
        <table className='text-center ms-5'  style={{width:'105%',height:'60px'}}>
            <thead>
                <tr className='bg-secondary' style={{width:'100%',height:'60px'}}>
                    <th>What is Netflix?</th>
                </tr>
                <br />
                <tr className='bg-secondary'  style={{width:'100%',height:'60px'}}>
                    <th>How much the netflix cost?</th>
                </tr>
                <br />
                <tr className='bg-secondary'  style={{width:'100%',height:'60px'}}>
                    <th>where can i watch?</th>
                </tr>
                <br />
                <tr className='bg-secondary'  style={{width:'100%',height:'60px'}}>
                    <th>how do i cancel?</th>
                </tr>
                <br />
                <tr className='bg-secondary'  style={{width:'100%',height:'60px'}}>
                    <th>where can i watch on netflix?</th>
                </tr>
                <br />
                <tr className='bg-secondary' style={{width:'100%',height:'60px'}}>
                    <th>Is Netflix for kids?</th>
                </tr>
                <br />
            </thead>
        </table>
        </div>
        <div className='col-lg-1'></div>
       </div>
     </div>
  )
}

export default LandingPage