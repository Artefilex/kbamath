import PropsType from "prop-types"

import { Link } from "react-router-dom"

export default function RightBar({blogs}){
 
  return (
    <div className="mobile:w-full  transition-colors drop-shadow-light flex flex-col items-start gap-2 px-2 py-2 ">
      {
        blogs.map((blog) => (     
          <Link to={`/bloglar/${blog.paramsUrl}` } key={blog.id} className="truncate hover:bg-[color:var(--bg-primary)]  w-full px-2 py-2">
          <div className=" font-semibold truncate capitalize text-[1rem] ">{blog.header} </div>
           <div className=" text-[0.8rem] leading-5 text-slate-600 normal-case  truncate"> {blog.subtitle}</div>
          </Link>
          
        ))
       }       
       </div>
  )
}

RightBar.propTypes = {
    blogs : PropsType.array
 }