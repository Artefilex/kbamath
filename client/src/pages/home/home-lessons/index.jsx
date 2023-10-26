
import { useState , useEffect} from "react";
import  {Link} from "react-router-dom"
import { DataProvider } from "../../../utils/data";
import Loading from "../../../components/loading";
import { RandomDataProvider } from "../../../components/random-data";
export default function HomeLessons() {
  const [lessons, setLessons] = useState([]);
  const { data: lessonData, loading: lessonDataLoading } =DataProvider("skills");
  useEffect(() => {
    if (!lessonDataLoading ) {
      const randomSkills = RandomDataProvider(lessonData, 5);
      setLessons(randomSkills);
    }
  }, [lessonData, lessonDataLoading]);

  return (
  <div className="grid    grid-cols-1  smobile:grid-cols-2 place-content-center  mobile:grid-cols-3 tablet:grid-cols-4 deskop:grid-cols-5  gap-4">
    {lessonDataLoading ? (
          <Loading />
      ) : (
         lessons.length > 0 &&
          lessons.map((lesson, i) => (
          <div className="flex items-center justify-center bg-[color:var(--c-subbase)] min-w-[10rem] min-h-[10rem]"key={i} >  <Link  to={`/dersler/bakma`}>
          {lesson.skillName} 
         </Link></div>
         )  )
      )}
  
  </div>
  )
 
}

