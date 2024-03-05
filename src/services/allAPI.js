import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"
 export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
 }
 //get video api called by view component
 export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
 
  }
  //remove video by viddocard
 export const removeVideoAPI= async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
 }
  //get categories to category component
  export const getCategoryAPI=async ()=>{
   return await commonAPI("GET",`${SERVER_URL}/categories`,"")
 
  }
  export const addCategoryAPI=async (categoryDetails)=>{
   return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
 
  }
  //remove category api
 export const removeCategoryAPII= async (categoryId)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}
//get single vide api
export const getAVideoAPI =async(videoId)=>{
   return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
   }
   //update category api
export const updateCategoryAPI =async(categoryId,updatedCategoryDetails)=>{
   return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
   }
    //getSinglecategory api
export const getSingleCategoryAPI =async(categoryId)=>{
   return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
   }
   