import { memo, useEffect, useState } from "react";
import { getData } from "../../utils/blog";
import SectionMain from "../../components/section-main";
// import   { blog  as mocdata} from "../../mock/index.js"
import { Link } from "react-router-dom";
import BlogHeader from "./blog-header";

const Blogs = memo(function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setBlogs(response[0]);
    };
    fetchData();
  }, []);
  console.log(blogs)
  return (
    <SectionMain>
      <BlogHeader />
      <main className=" py-2 grid  grid-rows-1 grid-cols-1  mobile:grid-rows-2 mobile:grid-cols-2 w-full gap-3 deskop:grid-rows-3 deskop:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-center w-full rounded-md  relative"
          >  
            {/* <Link to={`/bloglar/${blog.blogUrl}`} className=" overflow-hidden group rounded-md relative hover:-translate-y-2 gap-4 flex  flex-col justify-between  bg-[color:var(--bg-primary)] transition   min-h-[25rem] duration-700"  >
               
              <img
                src="https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg"
                className="transition-transform group-hover:scale-110 rounded-md absolute z-[1] top-0 left-0 w-full h-full object-cover duration-1000"
                alt=""
              />
            <div />
           
              <div className="rounded-md relative z-[2] bottom-0 group-hover:blog-second-bg w-full max-w-[20rem] blog-bg h-[10rem] p-4 flex text-[color:var(--blog-text)] justify-center flex-col group-hover:scale-105 duration-700 grou">
                <h2 className="font-bold ">{blog.header} </h2>
                <h4 className="font-semibold "> {blog.subtitle}</h4>
              </div>
            </Link> */}
                <Link to={`/bloglar/${blog.blogUrl}`} className="overflow-hidden group rounded-md  relative hover:-translate-y-1 gap-4 flex  flex-col justify-between  bg-[color:var(--bg-primary)] transition  h-[25rem] duration-700"  >
            

            <img
              src="https://img2.bilgeyik.com/blog/770x480/1628077791_gzuttzn.jpg"
              className="group-hover:scale-110 rounded-md relative z-[1]  w-[17rem] h-[25rem] object-cover duration-700 "
              alt=""
            />

              <div className="rounded-md absolute z-[2]  group-hover:blog-second-bg bottom-0  w-[17rem] max-w-[20rem] blog-bg h-[10rem] p-4 flex text-[color:var(--blog-text)] justify-center flex-col group-hover:scale-110 duration-700">
              <h2 className="font-bold ">{blog.header} </h2>
              <h4 className="font-semibold "> {blog.subtitle}</h4>
            </div> 
          </Link>

          </div>
        ))}
      </main>
    </SectionMain>
  );
})


export default  Blogs