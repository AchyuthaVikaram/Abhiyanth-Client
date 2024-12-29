import { getAllData,addDataToCollection,deleteDataById,updateDataById } from "./general"
const collectionName=process.env.REACT_APP_FIREBASE_EVENT_COLLECTION

export const getAllEvents=async()=>{
    try {
        const res=await getAllData(collectionName);
        const data={}
        data["completed"]=res.filter((item)=>item.status==="completed")
        data["ongoing"]=res.filter((item)=>item.status==="ongoing" || item.status==="live")
        data["upcoming"]=res.filter((item)=>item.status==="upcoming")
        return data;
        
    } catch (error) {
        return {
            completed:[],
            ongoing:[],
            upcoming:[]
        }
    }
}

export const addEvent=async(data)=>{
    const res=await addDataToCollection(collectionName,data);
    return res;
}

export const deleteEvent=async(id)=>{
    const res=await deleteDataById(collectionName,id);
    return res;
}

export const updateEvent=async(id,updatedData)=>{
    const res=await updateDataById(collectionName,id,updatedData);
    return res;
}