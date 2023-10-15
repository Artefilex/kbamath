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
       
       </SectionMain>
       
        
        </>
        
    )
}