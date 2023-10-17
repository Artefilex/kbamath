import {useEffect ,  useState } from "react"
 import { getData} from "../../utils/blog"
import SectionMain from "../../components/section-main";
// import   { blog  as mocdata} from "../../mock/index.js"
import { Link } from "react-router-dom";

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
        <>
        <SectionMain>   
           <div  className=" grid  grid-rows-1 grid-cols-1  mobile:grid-rows-2 mobile:grid-cols-2 w-full gap-3 deskop:grid-rows-3 deskop:grid-cols-3">  
     {
       blogs.map((blog) => (
        <div key={blog.id} className="flex items-center w-full justify-center">
           <Link   to={`/bloglar/${blog.blogUrl}`} className="  gap-4 flex  flex-col  bg-[color:var(--bg-primary)] p-2 min-h-[20rem]" >
         <img src="https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg" width={300} alt="" />
        <div>
          <h2>{blog.header} </h2>
          <h4> {blog.subtitle}</h4>
        </div>
         </Link>
        </div>
        
       ))
      }     
     
   
        </div>
       </SectionMain>
       
        
        </>
        
    )
}