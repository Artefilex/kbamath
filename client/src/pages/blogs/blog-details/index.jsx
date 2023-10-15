import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import RightBar from "../../../components/blog-rightbar"

export default function BlogDetails () {
     const [blog, setBlog] = useState([])
     const [blogs, setBlogs] = useState([])
    
    const {url} = useParams()
    console.log(url)
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_BASE_URL}/blogs/${url}`,{
                method: "GET",
                headers: {"Content-Type": "application/Json"}
              })
              .then((res) => res.json())
              .then((data) => {
                  setBlog(data.blog)
                  setBlogs(data.blogs)
              })
         
    },[url])
       


     return (
       <div className=" gap-4 flex w-full">
     
        {
         <div key={blog.id}  className="mt-6 w-9/12 ">
           {/* <img src={blog.headerimg} alt="" className="w-full h-[20rem] object-cover " /> */}
           <header className="mt-3 mb-1 flex flex-col gap-1">
              <h1 className="font-extrabold uppercase text-[1.875rem]">{blog.header}</h1>
              <h3 className="font-semibold capitalize text-[1.5rem] ">{blog.subtitle}</h3>
           </header>
           <div className="h-[0.1rem] w-[100%]  bg-[color:var(--c-subbase)] " />
           <section className="mt-10"  dangerouslySetInnerHTML={{ __html: blog.content}}>
           </section>         
           {/* <img src={blog.img2} alt=""  className="w-full h-[20rem] object-cover "/> */}
         </div>      
 
      }     
 
    <div className="w-3/12">
    <RightBar blogs={blogs}  />
    </div>
       
       </div>
     )
}