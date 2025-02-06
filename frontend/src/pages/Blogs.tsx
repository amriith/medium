

import { BlogCard } from "../components/BlogCard";


export const Blogs = () =>{
    return(
        <div>
            <BlogCard authorName="John Doe" title="My first blog" content="This is my first blog" publishedDate="2021-10-10"/>
            <BlogCard authorName="John Doe" title="My second blog" content="This is my second blog" publishedDate="2021-10-10"/>
            <BlogCard authorName="John Doe" title="My third blog" content="This is my third blog" publishedDate="2021-10-10"/>
            <BlogCard authorName="John Doe" title="My fourth blog" content="This is my fourth blog" publishedDate="2021-10-10"/>
        </div>
    )
}