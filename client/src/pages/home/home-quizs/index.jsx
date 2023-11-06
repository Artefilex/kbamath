import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import { Link } from "react-router-dom";
import QuizCard from "../../../components/quiz-card";
import imagetest from "../../../assests/image/exam.jpg";
export default function HomeQuizs() {
  const { theme } = useAppearance();
  console.log(theme.name);
  return (
    <div className="w-full  mb-[30rem]  xtablet:mb-[27rem]">
      <div
        className={classNames(
          "w-full absolute  left-0 right-0  h-[30rem] flex flex-col items-center justify-between gap-y-24 ",
          {
            "home-main-bg-dark": theme.name === "dark",
            "home-main-bg-light": theme.name === "light",
          }
        )}
      >
       <img  src={imagetest} alt="" className="absolute top-0 opacity-5 h-[30rem] left-0 bottom-0 object-cover w-full" />
        <div className="mt-4">
          <div>Quizler Size Ne Sağlıyor </div>
          <div> </div>
        </div>
        <div className="w-[95%]  xtablet:w-[90%] gap-8  laptop:w-[80%] flex-col justify-center flex items-center mobile:justify-between tablet:flex-row  mb-6">
          <div className="w-full">
            <Link to={"/test-quiz"}  className={classNames( "px-[3rem] py-5 rounded-full relative active:top-1 transition-all duration-300 font-bold z-[2] w-full",
                {
               "bg-black/50 hover:bg-black" : theme.name === "dark",
               "bg-white/30 hover:bg-white/40" : theme.name === "light",
                }
              )}
            >
            Quizler için Devam Edin
            </Link>
          </div>
        
          <div className={classNames("w-full min-h-[15rem] flex flex-col tablet:grid xtablet:grid-cols-2 gap-8 px-6 py-8",{
          
                "bg-black/40 ": theme.name === "dark",
                "bg-white/10": theme.name === "light",
            
          })}>
            <QuizCard count={1} text={"Hızlı Geribildirim"} />
            <QuizCard count={2} text={"Pratik Uygulama"} />
            <QuizCard count={3} text={"İndirim Fırsatı"} />
            <QuizCard count={4} text={"kendini test etme"} />
          </div>
        </div>
      </div>
    </div>
  );
}
// bg-[color:var(--bg-secondary)]
