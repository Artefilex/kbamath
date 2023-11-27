import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useAppearance } from "../../../../store/appearance/hooks";
import classnames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { handleDelete ,getAllItems } from "../../../../servises/admin";

function  QuizsList() {
  const [quizs, setQuizs] = useState([]);
  const { theme } = useAppearance();
  useEffect(() => {
    const fetchBlogs = async () => {
      const getQuizs = await getAllItems("quizs")
      setQuizs(getQuizs);
    };
    fetchBlogs();
  }, []);

 const deleteQuiz = async (deleteUrl) => {
  const url = `quizs/${deleteUrl}`;
  const successMessage = `${deleteUrl} Qiuz başarılı bir şekilde silindi `;
  const errorMessage = "Qiuz Silinemedi";
  const response = await handleDelete(url, successMessage, errorMessage);
  if(response){
    const filteredQuizs = quizs.filter((item) => item.paramsUrl !== deleteUrl);   
    setQuizs(filteredQuizs);  
  }
};
  const [sortOrder, setSortOrder] = useState("inc");
  const sortedQuizs =
    sortOrder === "inc" ? quizs : [...quizs].reverse();

  return (
    <div className="w-full gap-2  flex flex-col ">
      <button
        onClick={() => {
          setSortOrder(sortOrder === "inc" ? "dec" : "inc");
        }}
      >
        {sortOrder === "inc" ? (
          <div className="flex items-center justify-between font-semibold px-1">
            <div>İlk Eklenene Göre Sırala</div> <FaChevronDown />
          </div>
        ) : (
          <div className="flex items-center justify-between font-semibold px-1">
            <div>Son Eklenene Göre Sırala </div>
            <FaChevronUp />{" "}
          </div>
        )}
      </button>
      {sortedQuizs.map((quiz) => (
        <div
          key={quiz.id}
          className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "
        >
          <div>{quiz.title}</div>
          <div className="flex items-center justify-around gap-4 w-[200px]">
            <Link
              to={`/admin/quizs/${quiz.paramsUrl}`}
              className={classnames(
                "px-6 py-2 transition-color  hover:rounded-xl",
                {
                  " hover:bg-green-500  hover:text-white transition-color duration-300":
                    theme.name === "dark",
                  " hover:bg-green-500 hover:text-white transition-color duration-300":
                    theme.name === "light",
                }
              )}
            >
              Edit
            </Link>
            <button
              className="hover:bg-red-700 px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  "
              onClick={() => deleteQuiz(quiz.paramsUrl)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );

}

export default  QuizsList;
