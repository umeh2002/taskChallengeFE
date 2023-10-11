import { BiHomeAlt } from "react-icons/bi";
import { userState } from "../global/global";
import { useRecoilState } from "recoil";

const HomeHeader = () => {
    const [toogle, setToogle]= useRecoilState(userState)
    console.log(toogle)
  return (
    <div className="w-full h-[70px] flex justify-center items-center bg-slate-700">
      <div className="flex justify-between items-center w-[90%] h-full">
        <div className="flex items-center small:flex small:items-center">
          <BiHomeAlt className="text-[30px] mr-2 small:yext-[20px]" />
          <div className="font-bold text-[30px] small:text-[20px]">Todo</div>
        </div>
        <button
          className="w-[100px] h-[40px] rounded-md hover:cursor-pointer duration-300 decoration-none bg-blue-600 text-white"
          onClick={() => {
            setToogle(null)
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
