import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    title: string;
    content : string;
    id : number;
    author: {
        name: string;
    }

}

export const useBlog = ({id} : {id:string}) =>{
    const [loading , setLoading]= useState(true);
    const [posts, setPosts] = useState<Blog>();

     useEffect( () => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: localStorage.getItem("token")
            } 
        })
        .then(response =>{
            setPosts(response.data.blogs)
            setLoading(false)
        })
     }, [id])

     return {
        loading,
        posts
     }
}

export const useBlogs= () =>{
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Blog>();

    useEffect( () =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response =>{
            setPosts(response.data.blogs)
            setLoading(false)
        })
    },[])
    return{
        loading,
        posts
    }
}