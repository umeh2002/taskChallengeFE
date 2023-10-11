import { FaMicrosoft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-slate-700">
      <div className="w-[90%] h-full flex justify-between items-center ">
        <div className="flex items-center justify-center">
          <div className="text-[20px] mr-[5px] ">
            <FaMicrosoft />
          </div>
          <div className=" text-[20px] pt-1">Microsoft</div>
        </div>
        <Link to="/register">
          <button className="w-[100px] h-[40px] rounded-md hover:cursor-pointer duration-300 decoration-none bg-blue-600 text-white">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
