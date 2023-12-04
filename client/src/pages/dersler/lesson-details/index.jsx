import { useParams } from "react-router-dom";
import SectionMain from "../../../components/section-main";
import {useEffect, useState } from "react";
import { getSingleEducation } from "../../../servises";
import LeftbarLesson from "../leftbar-lesson";

export default  function LessonsDetails() {
  const { lessonid } = useParams();
   const [detail, setDetail] = useState({});

  useEffect(() => {
 
  const fetcEducation  = async()=>{
   const response =  await getSingleEducation(lessonid)
   setDetail(response.education)
  }    
  fetcEducation()
  }, [lessonid]);
   
  return (
    <SectionMain>
       <div className="w-full flex  flex-col  gap-6 mobile:flex-row">
      <LeftbarLesson/>
      
          <div
            className="flex items-center  flex-col w-[90%] py-2 px-2"
          >
            <header className="flex flex-col justify-between gap-5 w-full xtablet:flex-row pb-10">
              <img src={`${import.meta.env.VITE_BASE_URL}/${detail.image}`} alt= {detail.title} className="w-full xtablet:w-[50%] h-full max-h-[400px] object-cover" />
              <div className="flex items-start flex-col w-full xtablet:gap-16">
                <h1 className="uppercase text-[2rem] font-bold ">
                  {detail.title}
                </h1>
                <div className="uppercase text-[2rem] font-semibold  ">
                     {detail.price}
                </div>
              </div>
            </header>
            <div
              className="text-justify flex  gap-1 flex-col w-full text-[color:var(--c-base)]"
              dangerouslySetInnerHTML={{ __html: detail.content }}
            ></div>
          </div>
       
        </div>
    </SectionMain>
  );
}


