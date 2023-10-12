import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import img from "../assets/pexels-dlxmediahu-11911068.jpg"
import { createUser } from "../api/authApi";
import Swal from "sweetalert2"
const Register = () => {
  const navigate = useNavigate()
  const model = yup.object({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(model) });

  const onSubmit = handleSubmit(async (data:any) => {
    const {name, password, email} = data;
    createUser({name, password, email}).then((res:any)=>{
      if (res) {
        Swal.fire({
          icon:"success",
          title:"Created Successfully",
          text:"A mail has been sent to you, check your email",
          timerProgressBar:true,
          timer:9000,
        })
        navigate("/message")
      } else {
        Swal.fire({
          icon:"error",
          title:"not created",
          timerProgressBar:true,
          timer:9000,
        })
        navigate("/register")
      }
    })
  });
  return (
    <div className="w-full h-[100vh] flex ">
      <img className="w-[50%] h-full  object-cover small:hidden" src={img}/>
        
      <div className="w-[50%] h-full small:w-[100%]">
        <form action="" className="p-3 small:p-2" onSubmit={onSubmit}>
          <div className="text-[30px] mb-[10px]">Sign Up</div>
          <div className="mb-2">
            <div className="text-[18px] mx-1 ">name</div>
            <input
              type="text"
              placeholder="enter your name"
              className="outline-none w-[90%] h-[40px] border rounded-md pl-[10px] small:w-[100%]"
              {...register("name")}
            />
            {errors.name && (
              <div className="text-[12px] text-red-500 flex justify-end mr-[60px] small:mr-0">
                please input this field
              </div>
            )}
          </div>
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
          <div className="mb-2">
            <div className="text-[18px] mx-1 ">confirm password</div>
            <input
              type="password"
              placeholder="confirm password"
              className="outline-none w-[90%] h-[40px] border rounded-md pl-[10px]
              small:w-[100%]"
              {...register("confirm")}
            />
            {errors.confirm && (
              <div className="text-[12px] text-red-500 flex justify-end mr-[60px] small:mr-0">
                please input this field
              </div>
            )}
          </div>
          <div className="text-[12px] flex items-center mb-3">
            <input
              type="checkbox"
              className="cursor-pointer duration-300 transition-all "
            />
            <span className="ml-1">
              agree to our{" "}
              <span className="underline font-bold hover:cursor-pointer transition-all duration-300">
                Term
              </span>{" "}
              and{" "}
              <span className="underline font-bold hover:cursor-pointer transition-all duration-300">
                Condition
              </span>
            </span>
          </div>
          <button
            className="w-[90%] h-[40px] rounded-md cursor-pointer duration-300 transition-all bg-blue-500 text-white mb-2 small:w-[100%]"
            type="submit"
          >
            Sign up
          </button>
          <div className="text-[12px]">
            already have an account?{" "}
            <Link to="/sign-in">
              <span className="text-[20px] cursor-pointer duration-300 transition-all">
                Sign in
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
