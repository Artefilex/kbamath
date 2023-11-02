import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { DataProvider } from "../../../utils/data";
import Loading from "../../../components/loading";
import { RandomDataProvider } from "../../../components/random-data";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
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
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  //   lessondan bize bir adet path gelecek bunu /dersler/pathe gönderecez bir adet de resim gelmesi lazım

  return (
    <>
      {lessonDataLoading ? (
        <Loading />
      ) : ( <div className="w-[20rem]">
      <AutoplaySlider  play={true} cancelOnInteraction={false} interval={4000} bullets={false} organicArrows={false} >
        {lessons.length > 0 &&
          lessons.map((lesson, i) => (
            <div key={i}>
              <Link  to={`/dersler/bakma`}  className="!w-[20rem] !h-[20rem]" >{lesson.skillName}</Link>
            </div>
          ))}
        </AutoplaySlider>
      
      </div>  )}
    </>

 
  );
});

export default HomeLessons;


{/* <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
{lessons.length > 0 &&
  lessons.map((lesson, i) => (
    <div key={i}>
      <Link  to={`/dersler/bakma`}  >{lesson.skillName}</Link>
    </div>
  ))}
</AutoplaySlider> */}