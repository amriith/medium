import { Appbar } from "../components/Appbar"

export const Publish = () =>{
    return (
<div>
            <Appbar/>
    <div> 
        <form>
           <div className="w-full h-25 mb-4  rounded-lg bg-slate-300 ">
               <div className="px-4 py-5 bg-white font-medium text-gray-900 dark:text-white ">
                   <label className="sr-only">Your Title</label>
                   <textarea id="title" className="w-full h-14 py-4  text-5xl text-gray-900 bg-white-100 resize-none " placeholder="Title" required ></textarea>
                   <textarea id="title" className="w-full h-14  text-2xl text-gray-900 bg-white-100 resize-none " placeholder="Your Thoughts" required ></textarea>
               </div>
            </div>
        </form>
    </div>
 </div>
    )
}