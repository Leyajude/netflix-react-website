import React,{ useState } from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
  //remove video
  const deleteVideo=async(vID)=>{
    //api call
  const result=  await removeVideoAPI(vID)
    setDeleteVideoResponse(result.data)
  }
  const dragStarted=(e,vId)=>{
    console.log(`dragging started with video id:${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }
  
  return (
    <>
    <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}  className='shadow'>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'200px'} width={'100%'} 
      src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justfy-content-between'>
    <p> { displayData?.caption}</p>
      {!insideCategory &&    <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
}
        </Card.Title>
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} title="Stranger Things - Season 5 (2025) | First Trailer | NETFLIX | stranger things season 5 trailer" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default VideoCard