import axios from "axios";

const url: string = "https://task-challenge-uidu.onrender.com/api";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/register-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyApi = async (tokenID: string) => {
  try {
    return await axios.patch(`${url}/${tokenID}/verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signInApi = async (data: any) => {
  try {
    return await axios.post(`${url}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const changPasswordApi = async (token: any, data: any) => {
  try {
    return await axios
      .patch(`${url}/${token}/change-password`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const forgetPasswordApi=async(data:any)=>{
    try {
        return await axios.patch(`${url}/reset-password`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
