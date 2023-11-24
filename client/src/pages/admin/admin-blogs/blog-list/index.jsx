import { useEffect, useState } from "react";
import { getBlogs } from "../../../../servises";
import { Link } from "react-router-dom";
import { useAppearance } from "../../../../store/appearance/hooks";
import classnames from "classnames";
import axios from "axios";
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const { theme } = useAppearance();
  useEffect(() => {
    const fetchBlogs = async () => {
      // const response = await getBlogs();
      const response = await axios.get("http://localhost:4000/admin/blogs");
      
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = (blogId) => {
    console.log(blogId);
  };
  return (
    <div className="w-[95%] gap-2  flex flex-col ">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
        >
          <div>{blog.header}</div>
          <div className="flex items-center justify-around gap-4 w-[200px]">
            <Link
              to={`/admin/blogs/${blog.blogUrl}`}
              className={classnames(
                "px-6 py-2 transition-color  hover:rounded-xl",
                {
                  " hover:bg-green-500  hover:text-white transition-color duration-300":
                    theme.name === "dark",
                  " hover:bg-green-500 hover:text-white transition-color duration-300":
                    theme.name === "light",
                }
              )}
            >
              Edit
            </Link>
            <button
              className="hover:bg-red-700 px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  "
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
