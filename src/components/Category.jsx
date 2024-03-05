import React,{useEffect, useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap';
import { getCategoryAPI,addCategoryAPI,removeCategoryAPII,getAVideoAPI,updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category({removeCategoryVideoResponse}) {
  const[allCategories,setAllCategories]=useState([])

  const [categoryName,setCategoryName]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () =>{
      setShow(false);
      setCategoryName("")
    }
    
    const handleShow = () => setShow(true);
    const handleAddCategory = async ()=>{
      if(categoryName){
        const result = await addCategoryAPI({categoryName,allVideos:[]})
        handleClose()
        getAllcategories()
      }
      else{
        alert("Please fill the form completely!!!")
      }
    }
    const getAllcategories =async()=>{
      const result=await getCategoryAPI()
      setAllCategories(result.data)
    }
    // console.log(allCategories);


    useEffect(()=>{
        getAllcategories()
    },[removeCategoryVideoResponse])

    const handleRemoveCategory=async(cId)=>{
      await removeCategoryAPII(cId)
      getAllcategories()
    }

    const dragOverCategory=(e)=>{
      e.preventDefault()
      console.log("Dragging over category");
    }
    const videoDragStarted =(e,videoId,categoryId)=>{
      console.log(`Drag started from category Id: ${categoryId} with video id: ${videoId}`);
      let dataShare = {videoId,categoryId}
      e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  
  
    }
    const videoDropped = async(e,categoryId)=>{
      const videoId= e.dataTransfer.getData("videoId")
      console.log(`Video dropped with vId: ${e.dataTransfer.getData("videoId")},inside category Id: ${categoryId}`);
      //get details of videoId
      const {data}=await getAVideoAPI(videoId)
      console.log(data);
      //get category details where we have add video
      let selectedCategory = allCategories.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      getAllcategories()
    }
    
  return (
    <>
     <div className='d-flex justify-content-around'>
    <h4 style={{textAlign:'justify',fontSize:'55px'}}><b> All Categories</b></h4>

    <button className='btn bg-secondary  rounded-circle'  onClick={handleShow} ><i className="fa-solid fa-plus"></i></button>
</div>
<div className='container-fluid mt-5'>
{ allCategories.length>0?allCategories.map((item,index)=>(
   <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className='border rounded p-3 mb-2'>
    <div className='d-flex justify-content-between'>
    <h5>{item.categoryName}</h5>
  <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
    </div>
    <div className="row mt-2">
      {
        item.allVideos?.length>0 &&
        item.allVideos?.map((video,index)=>(
          <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
            <VideoCard insideCategory={true}  displayData={video}/>
          </div>

        ))
      }
    </div>
   </div>

))
:<div className='text-danger fw-bolder'>No Categories are added yet!!!</div>


}
</div>
<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>please fill the following details</p>
        <FloatingLabel
        controlId="floatingInputCaption"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="category Name" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category