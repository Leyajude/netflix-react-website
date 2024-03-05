import React,{useState} from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse]=useState("")
  const [uploadVideoResponse,setUploadVideoResponse]=useState("")

  return (
    <>
    <div className='ms-5 mt-3'>
    <Add setUploadVideoResponse={setUploadVideoResponse}/>  
    </div>
    <div className=' row container-fluid mt-5 mb-5 ms-5 '>
    <div className=" col-lg-6 ">
      <h5><b>Unlimited Movies and Shows</b></h5>
    <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
     </div>
     <div className="col-lg-6 ">
      <Category removeCategoryVideoResponse={removeCategoryVideoResponse} />
     </div>
    </div>
  

     <div className="col-lg-4"></div>
   <div className="col-lg-4 ms-5">  <div className='container mt-5'>
        <p style={{textAlign:'justify',fontSize:'20px'}}>These days, the small screen has some very big things to offer.</p>
        <span style={{textAlign:'justify',fontSize:'20px'}}>sitcoms to dramas to travel and talk shows, these are all the best shows on Tv</span>
        <span style={{textAlign:'justify',fontSize:'20px'}}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you wan</span>
     </div></div>
   
   <div className="col-lg-4"></div>
    </>
  )
}

export default Home