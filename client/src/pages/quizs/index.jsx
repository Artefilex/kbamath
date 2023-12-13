import { useEffect, useState } from "react"
import quizImg from "../../assests/image/quizHead.jpg"
import { Link } from "react-router-dom"
import SectionMain from "../../components/section-main"
import PageHeader from "../../components/page-heading"
import { getQuizs } from "../../servises"
import { getImageDataUrl } from "../../helpers/get-image-blob"
import toast from "react-hot-toast"
import classNames from "classnames"
import { useAppearance } from "../../store/appearance/hooks"
export default function Quizs () {
 const [quizs , setQuizs] = useState([])
    useEffect(()=>{
   const fetchQuizs = async() =>{

    try {
      const response = await  getQuizs()
      const updatedQuizs = await Promise.all(response.map(async (quiz) => {
        const base64Image = await getImageDataUrl(quiz.image);
        return { ...quiz, image: base64Image };
      }));
     
  
    setQuizs(updatedQuizs)
   }catch(error){
    toast.log(error)
   }   };
 fetchQuizs()

},[])
 const {theme} = useAppearance()
    return (
        <SectionMain>   
           <PageHeader image={quizImg} text={"SINAVLAR"} /> 
      <main className="w-full flex flex-row flex-wrap  items-start justify-center laptop:justify-start min-h-screen gap-8 mt-2  mb-6 ">
      {
          quizs.map((quiz , i ) => (
            <Link key={i} to={`/test-quiz/${quiz.paramsUrl}`} className={classNames("h-[22em] justify-between relative flex flex-col  max-w-[16rem] w-full hover:bottom-1 transition-all duration-300",{
              "border-gray-800 " : theme.name === "light"
            }
            )} >
               <div className="w-[16rem]  font-semibold text-center truncate capitalize"> {quiz.title} </div> 
            <img src= {`${quiz.image}`} alt={quiz.title}  className={"rounded w-[16rem] min-h-[20rem] object-cover drop-shadow-text"}/>
          </Link>
          ))    
        }
      </main>       
        </SectionMain>
    )
}