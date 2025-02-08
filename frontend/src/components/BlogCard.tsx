

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
        <div className="flex flex-col border rounded-2xl shadow-sm  pb-4 pt-4 border-slate-250">
            <a href="#">
           <div className="flex items-center space-x-2"> 
           <Avatar/> <div className="font-extralength pl-2 text-sm flex" > {authorName}  </div>    <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
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
    )   
}
function Badge({title}: Pick<BlogCardProps, "title">){
    const secondWord = title.split(" ")[1] || title;
    return (
        <span className="bg-gray-100 text-black-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-300 dark:text-black-300">{secondWord}</span>
    )
}
export function Avatar() {
    return (
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
      />
    );
  }

  export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}