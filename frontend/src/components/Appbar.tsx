import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () =>{
    return (
      <Link  to="/blogs">
        <div className="border-b flex justify-between px-10 py-4 ">
          <div className="flex flex-col justify-center cursor-pointer">
            Medium
          </div>
          <div>

          <button className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">
            <Link to="/publish"> New Blog </Link>
          </button> 
            <Avatar name="Ramit Kundu" />
          </div>
        </div>
        </Link>
    )
}