import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { DataProvider } from "../../../utils/data";
import Loading from "../../../components/loading";
import { RandomDataProvider } from "../../../components/random-data";
import imga from "../../../assests/image/homeheaderstudent.jpg";

import Slider from "../../../components/slider";
const HomeLessons = memo(function HomeLessons() {
  const [lessons, setLessons] = useState([]);
  const { data: lessonData, loading: lessonDataLoading } =
    DataProvider("skills");
  useEffect(() => {
    if (!lessonDataLoading) {
      const randomSkills = RandomDataProvider(lessonData, 5);
      setLessons(randomSkills);
    }
  }, [lessonData, lessonDataLoading]);
 
  //   lessondan bize bir adet path gelecek bunu /dersler/pathe gönderecez bir adet de resim gelmesi lazım

  return (
    <div className="w-full mt-6 flex items-center flex-col px-2">
      {lessonDataLoading ? (
        <Loading />
      ) : (
        <div className="w-full mt-[4rem] " data-aos="fade-up">
        
          <Slider setInt={4000}>
          {lessons.length > 0 &&
              lessons.map((lesson, i) => (
                <div key={i}>
                  <Link to={`/dersler/bakma`} className="relative">
                    <img src={imga} className="opacity-40 object-cover" />
                    <div className="text-white text-[2rem] z-[2] absolute bottom-[10%] left-[47%]">
                      {lesson.skillName}
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      )}
    </div>
  );
});

export default HomeLessons;

{
  /* <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
{lessons.length > 0 &&
  lessons.map((lesson, i) => (
    <div key={i}>
      <Link  to={`/dersler/bakma`}  >{lesson.skillName}</Link>
    </div>
  ))}
</AutoplaySlider> */
}
