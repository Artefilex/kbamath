import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import { Link } from "react-router-dom";
import QuizCard from "../../../components/quiz-card";
import imagetest from "../../../assests/image/homeheaderstudent.jpg"
export default function HomeQuizs() {
  const { theme } = useAppearance();
  console.log(theme.name);
  return (
    <div className="w-full   mb-[20rem]">             
      <div
        className={classNames(
          "w-full absolute  left-0 right-0  h-[30rem] flex flex-col items-center justify-start gap-y-24 ",
          {
            "home-main-bg-dark": theme.name === "dark",
            "home-main-bg-light": theme.name === "light",
          }
        )}
      >
        <div className="mt-4"> Quizlerle Neyi amaçlıyoruz  </div>
     <div className="w-[80%] flex items-center justify-between">
     <div className="w-full">

          <Link to={"/test-quiz"} className={classNames("px-[3rem] py-5 rounded-full backdrop-opacity-90 relative active:top-1 transition-all duration-300 font-bold z-[2]",{
             "bg-white/50 text-black" : theme.name === "dark",
             "bg-black/50" : theme.name === "light",
          })} > Sınavlar için takip  </Link>
        </div>
        <img src={imagetest} alt=""  className="absolute top-0 opacity-5 h-[30rem] left-0 bottom-0 object-cover w-full"/>
        <div className="w-full min-h-[10rem] grid grid-cols-2 gap-8">
          <QuizCard  count={1} text={"Hızlı Geribildirim"} />
          <QuizCard  count={2} text={"Pratik Uygulama"} />
          <QuizCard  count={3} text={"İndirim Fırsatı"} />
          <QuizCard  count={4} text={"kendini test etme"} />
        
        </div>
     </div>
      </div>
    </div>
  );
}
// bg-[color:var(--bg-secondary)]
