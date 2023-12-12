import {  useEffect, useState } from "react";
import { getBlogs} from "../../servises";
import SectionMain from "../../components/section-main";
import { Link } from "react-router-dom";
import PageHeader from "../../components/page-heading";
import daktilo from "../../assests/image/daktilo.jpg"
import { getImageDataUrl } from "../../helpers/get-image-blob";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBlogs();
        const updatedBlogs = await Promise.all(response[0].map(async (blog) => {
          const base64Image = await getImageDataUrl(blog.image);
          return { ...blog, image: base64Image };
        }));
        setBlogs(updatedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
  
    fetchData();
  }, []);
console.log(blogs)
  return (
    <SectionMain>
       <PageHeader image={daktilo} text={"BLOG"} /> 
     
      <main className=" py-2 grid  grid-rows-1 grid-cols-1  mobile:grid-rows-2 mobile:grid-cols-2 w-full gap-3 deskop:grid-rows-3 deskop:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-center w-full rounded-md  relative"
          >  
                <Link to={`/bloglar/${blog.paramsUrl}`} className="overflow-hidden group rounded-md  relative hover:-translate-y-1 gap-4 flex  flex-col justify-between  bg-[color:var(--bg-primary)] transition  h-[30rem] duration-700 "  >
             <img 
             src={blog?.image}
             alt={blog.header} className="group-hover:scale-105 rounded-md relative z-[1]  w-[20rem] h-[25rem] object-cover duration-700 " />
              <div className="rounded-md absolute z-[2]  group-hover:blog-second-bg bottom-0  w-[20rem] max-w-[20rem] blog-bg h-[10rem] p-4 flex text-[color:var(--blog-text)] justify-center flex-col group-hover:scale-105 duration-700">
              <h2 className="font-bold ">{blog.header} </h2>
              <h4 className="font-semibold "> {blog.subtitle}</h4>
            </div> 
          </Link>
          </div>
        ))}
      </main>
    </SectionMain>
  );
}


export default   Blogs