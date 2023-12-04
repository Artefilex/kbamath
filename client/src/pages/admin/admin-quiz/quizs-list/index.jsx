import { useEffect, useState } from "react";
import { handleDelete ,getAllItems } from "../../../../servises/admin";
import { useSelector } from "react-redux";
import SortedList from "../../../../helpers/sorted-list";
import AdminListBox from "../../../../components/admin-list-box";

function  QuizsList() {
  const [quizs, setQuizs] = useState([]);
  const {sortOrder} = useSelector((state) => state.adminOperations)
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
  const sortedQuizs = sortOrder === "inc" ? quizs : [...quizs].reverse();
  return (
    <div className="w-full gap-2  flex flex-col ">
      <SortedList/>
      {sortedQuizs.map((quiz) => (
        <AdminListBox
          key={quiz.id}
          header={quiz.title}
          handleDelete={() => deleteQuiz(quiz.paramsUrl)}
          editUrl={`quizs/${quiz.paramsUrl}`} 
        />
      ))}
    </div>
  );
}

export default  QuizsList;
