import {Avatar} from "./"


interface BlogCardProps {
    authorName: string;
    title:string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) =>{
    return (
        <div>
            <div>
                <Avatar/>
            </div>
           <div> 
            {authorName}  .  {publishedDate}
            </div> 
            <div>
                {title}
            </div>
            <div>
                {content.slice(0,70) + "...."}
            </div>
            <div>
                {`${Math.ceil(content.length/100)} minutes read`}
            </div>
        </div>
    )   
}