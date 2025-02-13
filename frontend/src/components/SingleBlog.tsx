import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard";

export const SingleBlog = ({blog } :{blog:Blog | null }) =>{
    if (!blog) return <div>Blog not found</div>; 
    return (
        <div>
            <div>
                <Appbar/>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4  pt-12 px-10 w-full max-w-screen-2xl mx-auto">
                    <div className="max-w-screen-md col-span-9 ">
                        <div className="font-extrabold text-5xl">
                            {blog.title}
                        </div>
                        <div className="text-slate-600 pt-2">
                            {blog.content}
                        </div>
                    </div>
                    <div className=" col-span-3">
                        Author
                          <div className="flex pt-5">
                          <div className="flex flex-col justify-center">  <Avatar name={blog.author.name || "Anonymous"}/> </div>
                          
                      <div className="text-xl font-bold px-4"> {blog.author.name || "Anonymous"}</div>
                      </div> 
                       <div className="text-slate-500 pt-5">
                       Digital Copies: Consider taking photos or scanning your receipts and storing them electronically. This can be a good backup in case you lose the physical copies.
                       </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    )
}