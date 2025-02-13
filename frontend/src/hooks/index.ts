import axios from "axios"; 
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({id} : {id:string}) =>{
    const [loading , setLoading]= useState(true);
    const [posts, setPosts] = useState<Blog | null>(null);

    useEffect(() => {
      const fetchBlog = async () => {
          try {
              const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                  headers: { authorization: localStorage.getItem("token") }
              });
              setPosts(response.data.blog || null); 
          } catch (error) {
              console.error("Error fetching blog:", error);
              setPosts(null);
          } finally {
              setLoading(false);
          }
      };

      fetchBlog();
  }, [id]);



     return {
        loading,
        posts
     }
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      setPosts(response.data.blog);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching blogs", error);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    posts
  };
};