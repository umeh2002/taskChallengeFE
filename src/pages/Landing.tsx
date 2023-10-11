import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[90%] h-full flex justify-center items-center flex-col ">
        <div className="text-[70px] mb-3">
          <TiTickOutline />
        </div>
        <div className="text-[20px] mb-3">Microsoft To Do</div>
        <div className="mb-3 text-center">To Do gives you focus, from work to play.</div>
        <Link to="/register">
          <button className="w-[100px] h-[40px] rounded-md hover:cursor-pointer duration-300 decoration-none bg-blue-600 text-white mb-3">
            Get started
          </button>
        </Link>
        <div className="text-[13px] hover:cursor-pointer duration-300 transition-all text-blue-400">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default Landing;
