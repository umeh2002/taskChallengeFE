import { AiOutlineDelete } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTask, deleteOne } from "../api/taskApi";
import { useRecoilValue } from "recoil";
import { user } from "../global/global";
import Swal from "sweetalert2";
import { getUserTask } from "../hook/Hooks";
import moment from "moment"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const HomeHero = () => {

    const [parent] = useAutoAnimate()
  const value: string = useRecoilValue(user);

  const {data}=getUserTask(value)

  const model = yup.object({
    priority: yup.string().required(),
    taskName: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ resolver: yupResolver(model) });

  const onSubmit = handleSubmit(async (data: any) => {
    const { taskName, priority } = data;

    createTask(value, { taskName, priority }).then((res: any) => {
      reset()
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Created Successfully",
          text: "task added",
          timerProgressBar: true,
          timer: 9000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "not created",
          timerProgressBar: true,
          timer: 9000,
        });
      }
    });
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center pt-[20px]">
      <div className="w-[90%] h-full">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Add a task"
              className="w-full h-[40px] border rounded-sm outline-none pl-[10px]"
              {...register("taskName")}
            />
            {errors.taskName && (
              <div className="text-[12px] text-red-400">error</div>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="eneter priority"
              className="w-full h-[40px] border rounded-sm outline-none pl-[10px]"
              {...register("priority")}
            />
            {errors.priority && (
              <div className="text-[12px] text-red-400">error</div>
            )}
          </div>
          <button
            className=" mt-[10px] w-[100px] h-[40px] rounded-md hover:cursor-pointer duration-300 decoration-none bg-blue-600 text-white"
            type="submit"
          >
            Enter
          </button>
        </form>
        <br />
        <br />

        <div className="flex flex-wrap" ref={parent}>
        {
            data?.map((props:any)=>(
                <div key={props.id} >
                    <div className="flex flex-wrap">
          <div className="mr-2 mb-2 flex">
            <div className="w-[200px] h-[100px] rounded-md border-2 p-2">
              <div className="text-[17px] font-bold">{props.taskName}</div>
              <div className="text-[15px] font-semibold">{props.priority}</div>
              <div className="text-[12px]">{moment(props.createdAt).fromNow()}</div>
              <div className="text-[20px] flex justify-end hover:cursor-pointer duration-300 transition-all">
                <AiOutlineDelete 
                onClick={()=>{
                    deleteOne(props.id)
                }}
                />
              </div>
            </div>
          </div>
        </div>
                </div>
            ))
        } 
        </div>
       
      </div>
    </div>
  );
};

export default HomeHero;
