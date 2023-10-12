import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import img from "../assets/pexels-dlxmediahu-11911068.jpg"
import {signInApi, verifyApi } from "../api/authApi";
import Swal from "sweetalert2"
import { useEffect } from "react";
import { userState } from "../global/global";
import { useRecoilState, useRecoilValue } from "recoil";

const SignIn = () => {
  const {tokenID} = useParams()
  const navigate = useNavigate()

  const [state, setState] = useRecoilState(userState);
  const value = useRecoilValue(userState);

  console.log(state)
  console.log(value)
   
  const model = yup.object({
    password: yup.string().required(),
    email: yup.string().email().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(model) });

  const onSubmit = handleSubmit(async (data:any) => {
    const { password, email} = data;
    signInApi({password, email}).then((res:any)=>{
      if (res) {
        setState(res)
        Swal.fire({
          icon:"success",
          title:"Created Successfully",
          text:"redirecting to home screen",
          timerProgressBar:true,
          timer:9000,
        })
        navigate("/home")
      } else {
        Swal.fire({
          icon:"error",
          title:"not created",
          timerProgressBar:true,
          timer:9000,
        })
        navigate("/sign-in")
      }
    })
  });

  useEffect(() => {
    if (tokenID) {
      verifyApi(tokenID);
    }
  }, [])
  return (
    <div className="w-full h-[100vh] flex ">
      <img className="w-[50%] h-full  object-cover small:hidden" src={img}/>
        
      <div className="w-[50%] h-full small:w-[100%]">
        <form action="" className="p-3 small:p-2 flex pt-[120px] flex-col   justify-center small:pt-[120px] " onSubmit={onSubmit}>
          <div className="text-[30px] mb-[10px]">Sign In</div>
         
          <div className="mb-2">
            <div className="text-[18px] mx-1 ">email</div>
            <input
              type="text"
              placeholder="enter your email"
              className="outline-none w-[90%] h-[40px] border rounded-md pl-[10px] small:w-[100%]"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-[12px] text-red-500 flex justify-end mr-[60px] small:mr-0">
                please input this field
              </div>
            )}
          </div>
          <div className="mb-2">
            <div className="text-[18px] mx-1 ">password</div>
            <input
              type="password"
              placeholder="enter your password"
              className="outline-none w-[90%] h-[40px] border rounded-md pl-[10px] small:w-[100%]"
              {...register("password")}
            />
            {errors.password && (
              <div className="text-[12px] text-red-500 flex justify-end mr-[60px] small:mr-0">
                please input this field
              </div>
            )}
          </div>
          <button
            className="w-[90%] h-[40px] rounded-md cursor-pointer duration-300 transition-all bg-blue-500 text-white mb-2 small:w-[100%]"
            type="submit"
          >
            Sign in
          </button>
          <div className="text-[12px]">
            don't have an account?{" "}
            <Link to="/register">
              <span className="text-[20px] cursor-pointer duration-300 transition-all">
                Sign up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn