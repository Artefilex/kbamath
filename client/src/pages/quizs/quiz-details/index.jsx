import { useParams } from "react-router-dom";
import { quizs } from "../../../mock";
import { useEffect, useState } from "react";

export default function QuizDetails() {
  const [quiz, setQuiz] = useState({});
  const { quizid } = useParams();


  useEffect(() => {
    const foundQuiz = quizs.find((item) => item.mainUrl === quizid);
    if (foundQuiz) {
      setQuiz(foundQuiz);
   
    } else {
      console.log("olmadı kanks");
    }
  }, [quizid]);

  return (
    <div className="w-full h-full">
      {quiz && (
        <iframe
          src={quiz.iframeUrl}
          scrolling="no"
          height={`${quiz.height} px`}
          className="w-full overflow-auto !D8bnZd"
        />
     
      )}
    </div>
  );
}
