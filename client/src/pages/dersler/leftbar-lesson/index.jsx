import { memo, useEffect, useState } from "react";
import IsMobile from "../../../helpers/is-mobile";
import { Link } from "react-router-dom";
import { getEducation } from "../../../servises";
const LeftbarLesson = memo(function LeftbarLesson() {
  const { isMobile } = IsMobile();
  const [educations,setEducations] = useState([])
  useEffect(()=>{
 const fectEducation = async () =>{
  const response = await getEducation()
  setEducations(response)
 }
 fectEducation()
  },[])
  const [show, setShow] = useState(false);
  return (
    <>
      {!isMobile && (
        <nav className="flex  flex-col mobile:min-h-screen gap-3  mobile:border-r-2  border-r-[color:var(--c-subbase)] transition-all duration-400">
          {educations.map((education, i) => (
            <Link
              key={i}
              to={`/dersler/${education.paramsUrl}`}
              className="hover:bg-[color:var(--c-subbase)] justify-center w-full min-w-[10rem]  gap-4 flex  flex-col  px-2 min-h-[3rem]"
            >
              <h2>{education.title} </h2>
            </Link>
          ))}
        </nav>
      )}
      {isMobile && (
        <>
          <div className="flex w-full flex-col items-center justify-center mt-6">
            <button
              onClick={() => setShow(!show)}
              className="w-[90%] font-bold bg-[color:var(--btn-dark-hover)] border border-[color:var(--c-base)] hover:bg-[color:var(--btn-dark-hover)] transition-all duration-300 rounded-sm px-4 py-2 shadow-xl relative active:top-[0.2rem] "
            >
              Özel Dersler
            </button>
            {show && (
              <div className="w-[90%] px-2 bg-[color:var(--bg-secondary)] mt-6 min-h-[20rem] overflow-auto py-2">
                {isMobile && (
                  <nav className="flex  flex-col  gap-3   border-r-[color:var(--c-subbase)] transition-all duration-400">
                    {educations.map((education, i) => (
                      <Link
                        key={i}
                        to={`/dersler/${education.paramsUrl}`}
                        className="hover:bg-[color:var(--c-subbase)] justify-center w-full min-w-[10rem]  gap-4 flex  flex-col  px-2 min-h-[3rem]"
                      >
                        <h2>{education.title} </h2>
                      </Link>
                    ))}
                  </nav>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
})
export default  LeftbarLesson