import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

 import { RandomDataProvider } from "../../../helpers/random-data";
import imga from "../../../assests/image/homeheaderstudent.jpg";
import Slider from "../../../helpers/slider";
import axios from "axios";

 function HomeLessons() {
  const [lessons, setLessons] = useState([]);

  useEffect( () => {
    const dataProvider = async () => {
      try {
        const response = await axios.get(`https://artefilex-portfoly.onrender.com/skills`);
        const randomData = await RandomDataProvider(response.data)
        setLessons(randomData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    dataProvider();
      
    
  }, []);

  //   lessondan bize bir adet path gelecek bunu /dersler/pathe gönderecez bir adet de resim gelmesi lazım

  return (
    <div className="w-full mt-6 flex items-center flex-col px-2">
        <div className="w-full mt-[4rem]">
          <Slider setInt={4000}>
          {lessons &&
              lessons.map((lesson, i) => (
                <div key={i}>
                  <Link to={`/dersler/bakma`} className="relative">
                    <img src={imga} className="opacity-50 object-cover" />
                    <div className="text-white text-[2rem] z-[2] absolute bottom-[10%] left-[47%]">
                      {lesson.skillName} 
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
     
    </div>
  )
}

export default  HomeLessons

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
