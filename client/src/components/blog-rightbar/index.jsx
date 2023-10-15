
import PropsType from "prop-types"

import { Link } from "react-router-dom"
export default function RightBar({blogs}){


    return (
      <div className="mt-6 w-full">
        {
          blogs.map((blog) => (
            <div key={blog.id}>
            <Link to={`/bloglar/${blog.blogUrl}`}>
            <h2>{blog.header} </h2>
             <h4> {blog.subtitle}</h4>
            </Link>
            </div>
          ))
         }     
          
         </div>
    )
}

RightBar.propTypes = {
    blogs : PropsType.array
 }