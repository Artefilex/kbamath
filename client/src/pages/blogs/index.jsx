import {useEffect ,  useState } from "react"
 import { getData} from "../../utils/blog"
import SectionMain from "../../components/section-main";
export default function  Blogs (){
  const [blogs , setBlogs] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const response = await getData();
            setBlogs(response[0])
          };
         
          fetchData();
    },[])

 console.log(blogs)


        
    return (
        <SectionMain>
      <div>
      {
        blogs.map((blog) => (
          <div key={blog.id}>
            <h1>{blog.header}</h1>
            
          </div>
        ))
       }    
        
        </div>   
        </SectionMain>
    )
}