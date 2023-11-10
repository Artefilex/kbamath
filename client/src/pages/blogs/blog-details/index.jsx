import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RightBar from "../../../components/blog-rightbar";
import IsMobile from "../../../components/is-mobile";

export default function BlogDetails() {
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const {isMobile} = IsMobile()
 
  const [show, setShow] = useState(false);

  const { url } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/blogs/${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.blog);
        setBlogs(data.blogs);
      });
  }, [url]);
 
  return (
    <div className=" gap-4 flex w-full items-center justify-center flex-col mobile:flex-row  mobile:gap-4 mobile:items-start relative ">
      {
        <div key={blog.id} className="mt-6 w-[90%]   mobile:w-9/12  ">
          {/* <img src={blog.headerimg} alt="" className="w-full h-[20rem] object-cover " /> */}
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
          {/* <img src={blog.img2} alt=""  className="w-full h-[20rem] object-cover "/> */}
        </div>
      }
      {isMobile && (
        <>
          <div className="flex w-full items-center justify-center mt-6">
            <button
              onClick={() => setShow(!show)}
              className="w-[90%] font-bold bg-[color:var(--btn-dark-hover)] border border-[color:var(--c-base)] hover:bg-[color:var(--btn-dark-hover)] transition-all duration-300 rounded-sm px-4 py-2 shadow-xl relative active:top-[0.2rem] "
            >
              Daha Fazla Blog{" "}
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
            {" "}
            Daha Fazla blog{" "}
          </h1>
          <div>
            <RightBar blogs={blogs} />
          </div>
        </div>
      )}
    </div>
  );
}
