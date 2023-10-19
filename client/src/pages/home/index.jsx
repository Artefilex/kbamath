import SectionMain from "../../components/section-main";
import {DataProvider} from "../../utils/data"
import AboutHeader from "../about/about-header"
import { RandomDataProvider } from "../../components/random-data";
import HomeBlog from "./home-blogs";
import { useEffect, useState } from "react";
import HomeLessons from "./home-lessons";
import HomeNots from "./home-nots";
export default function Home (){

  const [ lessons , setLessons] = useState([])
  const [blogs, setBlogs] = useState([])
    const {data :blogsData ,loading : blogsDataLoading} = DataProvider("blogs")
    const {data : lessonData ,loading : lessonDataLoading} = DataProvider("skills")
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
           <AboutHeader/>
            <div>
            { blogs.length > 0  && blogs.map((blog, i) => (
                       <HomeBlog key={i}  blog={blog} />
                    ))
                }
            </div>
            <div>
             {lessons.length > 0 && lessons.map((lesson)=>(
                 <HomeLessons key={lesson.id} lesson={lesson} />
             ))}
              <HomeNots  />
            </div>
    </SectionMain>
    )
}