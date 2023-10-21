import {useEffect ,  useState } from "react"
 import { getData} from "../../utils/blog"
import SectionMain from "../../components/section-main";
// import   { blog  as mocdata} from "../../mock/index.js"
import { Link } from "react-router-dom";
import BlogHeader from "./blog-header";

export default function  Blogs (){
  
  const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const response = await getData();
            setBlogs(response[0])
          };
         
          fetchData();
    },[])
    return (
        <SectionMain>   
           <BlogHeader/>  
           <main className=" py-2 grid  grid-rows-1 grid-cols-1  mobile:grid-rows-2 mobile:grid-cols-2 w-full gap-3 deskop:grid-rows-3 deskop:grid-cols-3">  
     {
       blogs.map((blog) => (
        <div key={blog.id} className="flex items-center w-full justify-center rounded-md">
           <Link   to={`/bloglar/${blog.blogUrl}`} className=" overflow-hidden group rounded-md relative  gap-4 flex  flex-col justify-between  bg-[color:var(--bg-primary)]  min-h-[25rem]" >
            <div/>
         <img src="https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg"   className="transition-transform transform-gpu group-hover:scale-110 rounded-md absolute z-[1] top-0 left-0 w-full h-full object-cover duration-500"  alt="" />
        
        <div className="rounded-md relative z-[2] bottom-0 w-full blog-bg h-[10rem] p-2 flex  justify-center flex-col">
          <h2 >{blog.header} </h2>
          <h4> {blog.subtitle}</h4>
        </div>
         </Link>
        </div>
        
       ))
      }     
     
   
        </main>
       </SectionMain>       
    )
}