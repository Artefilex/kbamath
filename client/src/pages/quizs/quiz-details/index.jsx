import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleQuiz } from "../../../servises";

export default function QuizDetails() {
  const [quiz, setQuiz] = useState({});
  const { quizid } = useParams();


  useEffect(() => {
    const fetchQuiz = async () =>{
      const response = await getSingleQuiz(quizid)
       setQuiz(response)
    }
    fetchQuiz()
  }, [quizid]);

  return (
    <div className="w-full  h-full">
      {quiz && (
        <iframe
          src={quiz.iframeUrl}
        scrolling="no"
         height={`${parseInt(quiz.iframeHeight  ) + 400}px`}
          className={`w-full `}
        />
     
      )}
    </div>
  );
}
