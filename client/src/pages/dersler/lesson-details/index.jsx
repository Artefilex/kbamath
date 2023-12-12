import { useParams } from "react-router-dom";
import SectionMain from "../../../components/section-main";
import {useEffect, useState } from "react";
import { getSingleEducation } from "../../../servises";
import LeftbarLesson from "../leftbar-lesson";
import { getImageDataUrl } from "../../../helpers/get-image-blob";

export default  function LessonsDetails() {
  const { lessonid } = useParams();
   const [detail, setDetail] = useState({});
   const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
 
  const fetcEducation  = async()=>{
   const response =  await getSingleEducation(lessonid)
   setDetail(response.education)
  }    
  fetcEducation()
  }, [lessonid]);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const base64Image = await getImageDataUrl(detail?.image);
        setImageSrc(base64Image);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    }; loadImage();
  }, [detail?.image]);
   
  return (
    <SectionMain>
       <div className="w-full flex  flex-col  gap-6 mobile:flex-row">
      <LeftbarLesson/>
      
          <div
            className="flex items-center  flex-col w-[90%] py-2 px-2"
          >
            <header className="flex flex-col justify-between gap-5 w-full xtablet:flex-row pb-10">
            {imageSrc && <img src={imageSrc}  alt= {detail.title} className="w-full min-w-[400px] xtablet:w-[50%] min-h-[250px] max-h-[250px]  object-cover" />}
              <div className="flex items-start flex-col w-full xtablet:gap-8">
                <h1 className="uppercase text-[2rem] font-bold ">
                  {detail.title}
                </h1>
                <div className="capitalize font-semibold  ">
                    <div className="text-[2rem] "> Fiyat Bilgisi </div>
                    <div className="uppercase text-[1.7rem] font-semibold  ">  {detail.price} TL</div>
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


