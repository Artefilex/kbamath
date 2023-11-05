// import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { quizs } from "../../mock"
import SectionMain from "../../components/section-main"
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
      <div className="w-full flex flex-col mt-24">
       denemee
      {
          quizs.map((quizdata , i ) => (
            <Link key={i} to={`/test-quiz/${quizdata.mainUrl}`} > {quizdata.header} </Link>
          ))    
        }
      </div>
  
                
        </SectionMain>
    )
}