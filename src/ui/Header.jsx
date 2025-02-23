import logo from "../assets/images/logo.png";
import { MdArrowBackIosNew } from "react-icons/md";

const Header = () => {
  return (
    <div className=" bg-green-950 px-4 sm:px-32 h-[10vh] flex items-center">
      <div className="flex  items-center gap-10">
        <MdArrowBackIosNew className="text-yellow-400" />
        <img src={logo} alt="logo" className="w-36" />
      </div>
    </div>
  );
};

export default Header;
