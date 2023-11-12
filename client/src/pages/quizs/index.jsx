// import { useEffect, useState } from "react"
import quizImg from "../../assests/image/quizHead.jpg"
import { Link } from "react-router-dom"
import { quizs } from "../../mock"
import SectionMain from "../../components/section-main"
import PageHeader from "../../components/page-heading"
export default function Quizs () {
// const [quizs , setQuizs] = useState([])
//     useEffect(()=>{
//   fetch("fetch/quizs")
//   .then(data => data.json())
//   .then((response) => {
//    setQuizs(response)
//   }).catch((error)=>{
//     console.log(error)
//   })
// // beklenti bir quiz-name quiz-url
// },[])
    return (
        <SectionMain>   
           <PageHeader image={quizImg} text={"SINAVLAR"} /> 
      <main className="w-full flex flex-row flex-wrap  items-center justify-center gap-8 mt-2  ">
      {
          quizs.map((quizdata , i ) => (
            <Link key={i} to={`/test-quiz/${quizdata.mainUrl}`} className="relative flex flex-col gap-2 max-w-[13rem] w-full hover:bottom-1 transition-all duration-300" > 
            <img src= {quizdata.headerImg} alt=""  className="rounded"/>
             {quizdata.header} </Link>
          ))    
        }
      </main>       
        </SectionMain>
    )
}