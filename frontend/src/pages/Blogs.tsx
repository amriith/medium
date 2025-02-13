
import { useBlogs } from "../hooks";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";



export const Blogs = () =>{
   const {loading, posts} = useBlogs();

   if (loading) return(
    <div>
        <div>
            <Appbar/>
         </div>
    <div>
    Loading...
    
    </div>
    </div>
       
       )

       return (
        <div>
        <Appbar />
        <div  className="flex justify-center">
            <div>
            {posts.map(blog => <BlogCard
                     id = {blog.id}
                   authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
            </div>
        </div>
    </div>
    
        )
}