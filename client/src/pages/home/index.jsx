import SectionMain from "../../components/section-main";
import {DataProvider} from "../../utils/data"
import AboutHeader from "../about/about-header"
import { RandomDataProvider } from "../../components/random-data";
import HomeBlog from "./home-blogs";
import { useEffect, useState } from "react";
import HomeLessons from "./home-lessons";
import HomeNots from "./home-nots";
import Loading from "../../components/loading";
export default function Home (){

  const [ lessons , setLessons] = useState([])
  const [blogs, setBlogs] = useState([])
    const {data :blogsData ,loading : blogsDataLoading} = DataProvider("blogs")
    const {data : lessonData ,loading : lessonDataLoading} = DataProvider("skills")
    console.log(lessonDataLoading, blogsDataLoading)
    useEffect(() => {
          if (!lessonDataLoading && !blogsDataLoading) {
            const randomSkills = RandomDataProvider( lessonData , 5);
            const randomBlog = RandomDataProvider(blogsData, 5)
            setLessons(randomSkills);
            setBlogs(randomBlog)
          }
          

      }, [lessonData, lessonDataLoading, blogsData ,blogsDataLoading]); 
      
    

    return (
        <SectionMain>
          <h4>Matematikte Başarının Anahtarı Burada</h4>
           <AboutHeader/>
           <div className="w-full">
        {blogsDataLoading ? (
         <Loading/>
        ) : (
          blogs.length > 0 &&
          blogs.map((blog , i ) => (
            <HomeBlog key={i} blog={blog} />
          ))
        )}
      </div>
      <div className="grid    grid-cols-1  smobile:grid-cols-2 place-content-center  mobile:grid-cols-3 tablet:grid-cols-4 deskop:grid-cols-5  gap-4 ">
        {lessonDataLoading ? (
         <Loading/>
        ) : (
          lessons.length > 0 &&
          lessons.map((lesson , i ) => (
            <HomeLessons key={i} lesson={lesson} />
          ))
        )}
       
      </div>
      <HomeNots />
    </SectionMain>
    )
}