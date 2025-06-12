import { CiSearch} from "react-icons/ci";
import { FiPlusSquare } from "react-icons/fi";
import { TbPhotoVideo } from "react-icons/tb";
import { GoHome, GoSearch  } from "react-icons/go";
import { Link } from 'react-router'
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50">
      <div className="flex justify-around items-center h-12">
        <Link to="/"><GoHome className="w-6 h-6 text-black" /></Link>
        <Link to="/music"><GoSearch  className="w-6 h-6 text-black" /></Link>
        <Link to="/create"><AiOutlinePlusSquare className="w-6 h-6 text-black" /></Link>
        <Link to="/reels"><TbPhotoVideo className="w-6 h-6 text-black" /></Link>
        <Link to="/profile"><img src="../img/loading.png" className="h-8 w-8 rounded-full object-cover" /></Link>
      </div>
    </nav>
  )
}