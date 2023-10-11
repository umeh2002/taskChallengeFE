import axios from "axios"

const url:string="https://task-challenge-uidu.onrender.com/api"

export const createTask = async(userID:string, data:any)=>{
    try {
        return await axios.post(`${url}/${userID}/create-task`, data).then((res:any)=>{
            // console.log(res.data.data)
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readOne =async(userID:any)=>{
    try {
        return await axios.get(`${url}/${userID}/get-task`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error) 
    }
}

export const deleteOne =async(taskID:any)=>{
    try {
        return await axios.delete(`${url}/${taskID}/delete-one-task`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
       console.log(error) 
    }
}