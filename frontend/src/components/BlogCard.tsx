import { Link } from "react-router-dom";


interface BlogCardProps {
    authorName: string;
    title:string;
    content: string;
    publishedDate: string;
    id: number;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) =>{
    return (
       <Link to={`/blog/${id}`} > <div className="flex flex-col border-b pb-4 max-w-screen-md pt-4 ">
            <a href="#">
           <div className="flex items-center space-x-2"> 
           <Avatar  name={authorName} /> <div className="font-extralength pl-2 text-sm flex" > {authorName}  </div>    <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>  <div className="font-thin pl-2 text-slate-500" >{publishedDate} </div> 
            </div> 
            <div className="font-semibold text-xl">
                {title}
            </div>
            <div className="text-slate-600 dark:text-slate-400">
                {content.slice(0,120) + "...."}
            </div>
            <div>
               <Badge title={title}/>   {`${Math.ceil(content.length/100)} minutes read`}
            </div>
            </a>
        </div>
        </Link>
    )   
}
function Badge({title}: Pick<BlogCardProps, "title">){
    const secondWord = title.split(" ")[1] || title;
    return (
        <span className="bg-gray-100 text-black-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-300 dark:text-black-300">{secondWord}</span>
    )
}
export function Avatar({name}: {name: string}) {
  const words = name.split(' ');
  const firstInitial = words[0] ? words[0][0].toUpperCase() : '';
  const thirdInitial = words[1] ? words[1][0].toUpperCase() : '';
  const initials = firstInitial + thirdInitial; 
  return (
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300"> {initials}</span>
</div>
    );
  }

  export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}