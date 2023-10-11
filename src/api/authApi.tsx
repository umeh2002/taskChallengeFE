import axios from "axios";

const url: string = "http://localhost:2928/api";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/register-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyApi = async (token: string) => {
  try {
    return await axios.patch(`${url}/${token}/verify`).then((res: any) => {
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
