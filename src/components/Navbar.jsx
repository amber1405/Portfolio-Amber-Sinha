import { FaGripfire } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center text-white">
      <div>
        <h1 className="flex text-3xl items-center col-span-5 cursor-pointer font-mono  m-3 ">
          <FaGripfire className="flex text-white gap-3" />
          Portfolio
        </h1>
      </div>
      <ul className="flex justify-evenly font-mono text-lg gap-10 ">
        <li className="hover:text-purple-700 ease-in-out duration-700">About</li>
        <li className="hover:text-purple-700 ease-in-out duration-700">Skills</li>
        <li className="hover:text-purple-700 ease-in-out duration-700">Experience</li>
        <li className="hover:text-purple-700 ease-in-out duration-700">Projects</li>
        <li className="hover:text-purple-700 ease-in-out duration-700">Education</li>
      </ul>
      <button className="w-28 border-2 border-indigo-500 bg- font-semibold font-inter text-xl rounded-full text-richblack-25 hover:bg-purple-700 ease-in-out duration-500">
        Github
      </button>
    </div>
  );
};

export default Navbar;
