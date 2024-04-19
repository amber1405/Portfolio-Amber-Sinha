import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full py-8 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-4 items-center p-4 text-slate-100 ">
        <div className="font-semibold text-2xl text-purple-500 ">Amber Sinha</div>
        <ul className="w-full max-w-3xl mt-2 flex justify-center text-base gap-8 ">
            <li className="hover:text-purple-700 ease-in-out duration-700">About</li>
            <li className="hover:text-purple-700 ease-in-out duration-700">Skills</li>
            <li className="hover:text-purple-700 ease-in-out duration-700">Experience</li>
            <li className="hover:text-purple-700 ease-in-out duration-700">Projects</li>
            <li className="hover:text-purple-700 ease-in-out duration-700">Education</li>
      </ul>
        <div className="flex mt-4">
          <div className="inline-block px-4 text-2xl text-slate-100 transition-colors duration-200 ease-in-out hover:text-purple-600"><FaGithub /></div>
          <div className="inline-block px-4 text-2xl text-slate-100 transition-colors duration-200 ease-in-out hover:text-purple-600"><FaLinkedin /></div>
          <div className="inline-block px-4 text-2xl text-slate-100 transition-colors duration-200 ease-in-out hover:text-purple-600"><SiLeetcode /></div>
          <div className="inline-block px-4 text-2xl text-slate-100 transition-colors duration-200 ease-in-out hover:text-purple-600"><FaXTwitter /></div>
        </div>
        <div className="mt-6 text-sm text-center text-slate-200">
          &copy; 2023 Amber Sinha. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
