

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
        <div className="flex flex-col">
            
           <div className="flex items-center space-x-2"> 
           <Avatar/>  {authorName}  .  {publishedDate}
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
function Avatar() {
    return (
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    );
  }