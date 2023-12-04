import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightBar from "../../../components/blog-rightbar";
import IsMobile from "../../../helpers/is-mobile";
import { getSingleBlog } from "../../../servises/index"
export default function BlogDetails() {
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const {isMobile} = IsMobile()
  const [show, setShow] = useState(false);
  const { id } = useParams();
  useEffect(() => {
      const  getBlog = async()=>{
       const response = await getSingleBlog(id)
              setBlog( response.blog);
             setBlogs( response.blogs);
      }
      getBlog()

  }, [id]);
  console.log(blog.image)
  return (
    <div className=" gap-4 flex w-full items-center justify-center flex-col mobile:flex-row  mobile:gap-4 mobile:items-start relative ">
     {
        <div key={blog.id} className="mt-6 w-[90%]   mobile:w-9/12  ">
          <img src={`${import.meta.env.VITE_BASE_URL}/${blog.image}`} alt={blog.header} className="w-full h-full max-h-[400px] object-cover " />
          <header className="mb-3  flex flex-col gap-1">
            <h1 className="font-bold uppercase text-[1.4rem]  tablet:text-[1.875rem] ">
              {blog.header}
            </h1>
            <h3 className="font-semibold capitalize text-[1.2rem]  tablet:text-[1.5rem] ">
              {blog.subtitle}
            </h3>
          </header>
          <div className="h-[0.1rem] w-[100%]  bg-[color:var(--c-subbase)] " />
          <section
            className="mt-10"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></section>
     
        </div>
      }
      {isMobile && (
        <>
          <div className="flex w-full items-center justify-center mt-6">
            <button
              onClick={() => setShow(!show)}
              className="w-[90%] font-bold bg-[color:var(--btn-dark-hover)] border border-[color:var(--c-base)] hover:bg-[color:var(--btn-dark-hover)] transition-all duration-300 rounded-sm px-4 py-2 shadow-xl relative active:top-[0.2rem] "
            >
              Daha Fazla Blog
            </button>
          </div>
          {show && (
            <div className="w-[90%] px-2 bg-[color:var(--bg-secondary)] mt-6 min-h-[20rem] overflow-auto py-2">
              <div>
                <RightBar blogs={blogs} />
              </div>
            </div>
          )}
        </>
      )}

      {!isMobile && (
        <div className="w-[90%] px-2 bg-[color:var(--bg-secondary)] mt-6 h-[20rem] overflow-auto mobile:h-[42rem] mobile:mx-2 mobile:w-[18rem]">
          <h1 className="uppercase  font-extrabold leading-10 text-[1.15rem] mb-3 ">
        
            Daha Fazla blog
          </h1>
          <div>
            <RightBar blogs={blogs} />
          </div>
        </div>
      )} 
    </div>
  );
}
