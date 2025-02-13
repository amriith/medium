import { useParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { useBlog } from "../hooks"
import { SingleBlog } from "../components/SingleBlog";

export const Blog = () =>{
    const {id} = useParams();
    const { loading , posts} = useBlog( {id: id || ""})
    if (loading) return (
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
           <div>
           
           
           <div>
            <SingleBlog blog={posts} />
           </div>

           </div>
        </div>
    )   
}