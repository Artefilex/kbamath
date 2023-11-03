
import { useState,useEffect, memo } from "react";
import { DataProvider } from "../../../utils/data";
import { RandomDataProvider } from "../../../components/random-data";
import Loading from "../../../components/loading";
import Slider from "../../../components/slider";

 const HomeBlogs = memo(function HomeBlogs(){
  const [blogs, setBlogs] = useState([]);
  const { data: blogsData, loading: blogsDataLoading } = DataProvider("blogs");
  useEffect(() => {
    if (!blogsDataLoading) {
      const randomBlog = RandomDataProvider(blogsData, 5);
      setBlogs(randomBlog);
    }
  }, [ blogsData, blogsDataLoading]);
  return <div  className="w-[50%]"> 

   {blogsDataLoading ? (
           <Loading />
        ) : (
          blogs.length > 0 && <Slider setInt={5000}>
           {
              blogs.map((blog, i) => (
                <div key={i}  > 
               home -blogs 
                </div>
              ))
           }
          </Slider>
        )}
 
     {/* {blogsDataLoading ? (
          <Loading />
        ) : (
          blogs.length > 0 &&
          blogs.map((blog, i) => (
            <div key={i}  > 
           home -blogs 
            </div>
          ))
        )} */}
  </div>;
}

 )
 

export default HomeBlogs

