import React,{useState} from 'react'
import {Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add() {
    const [uploadVideo,setUploadVideo]=useState({
      caption:"",imageURL:"",youtubeLink:""
    })
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
    }
    console.log(uploadVideo);

    const getYoutubeEmbedLink=(link)=>{
      if(link.includes("v=")){
        let videoId=link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert("input proper youtube link!!")
      }
    }

    const handleUpload= async()=>{
      const {caption,imageURL,youtubeLink}=uploadVideo
      if(caption && imageURL && youtubeLink){
     const result=await uploadVideoAPI(uploadVideo)
     console.log(result);
     if(result.status>=200 && result.status<300){
       alert(`video'${result.data.caption}'upload successfully `)
       setUploadVideoResponse(result.data)
       handleClose()
     }else{
       alert("API call failed ... please try after some time!!!")
     }
      }else{
       alert('please fill the form completely!!')
      }
    }


  return (
    <>
    <div className='d-flex mt-5 ms-5'>
    <h4 style={{textAlign:'justify',fontSize:'55px'}}><b>TV Shows</b></h4>

    <button className='btn bg-secondary ms-2 rounded-circle'  onClick={handleShow} ><i className="fa-solid fa-plus"></i></button>
   
</div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Popular On Netflix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='border rounded border-secondary p-3'>
            <p>please fill the following details</p>
            <FloatingLabel
        controlId="floatingInputCaption"
        label="Series Name"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Series Name" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImg"
        label="Image "
        className="mb-3"
      >
        <Form.Control  value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Video "
        className="mb-3"
      >
        <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)}   type="text" placeholder="Video" />
      </FloatingLabel>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-danger'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add