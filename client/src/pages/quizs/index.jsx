import { useEffect, useState } from "react"
import quizImg from "../../assests/image/quizHead.jpg"
import { Link } from "react-router-dom"
import SectionMain from "../../components/section-main"
import PageHeader from "../../components/page-heading"
import { getQuizs } from "../../servises"
export default function Quizs () {
 const [quizs , setQuizs] = useState([])
    useEffect(()=>{
   const fetchQuizs = async() =>{
    const response = await  getQuizs()
    setQuizs(response)
   }
 fetchQuizs()

},[])

    return (
        <SectionMain>   
           <PageHeader image={quizImg} text={"SINAVLAR"} /> 
      <main className="w-full flex flex-row flex-wrap  items-center justify-center gap-8 mt-2  ">
      {
          quizs.map((quiz , i ) => (
            <Link key={i} to={`/test-quiz/${quiz.paramsUrl}`} className="relative flex flex-col gap-2 max-w-[13rem] w-full hover:bottom-1 transition-all duration-300" > 
            <img src= {`${import.meta.env.VITE_BASE_URL}/${quiz.image}`} alt={quiz.title}  className="rounded"/>
             {quiz.title} </Link>
          ))    
        }
      </main>       
        </SectionMain>
    )
}