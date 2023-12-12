import { useParams } from "react-router-dom";
import NotsMain from "../nots-component";
import LeftBar from "../left-navbar";
import { useEffect, useState } from "react";
import { getNotsByClassThenCategory } from "../../../servises";
import pdf from "../../../assests/image/pdfimage.svg";
import toast from "react-hot-toast";
import { getImageDataUrl } from "../../../helpers/get-image-blob";
export default function TopicDetail() {
  const { classid } = useParams();
  const { topicid } = useParams();

  const [notsByCategory, setNotsByCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try{
        const notsCategory = await getNotsByClassThenCategory(classid, topicid);
        const updatedCategorys = await Promise.all(notsCategory.map(async (category) => {
          const base64Image = await getImageDataUrl(category.image);
          return { ...category, image: base64Image };
        }));
        setNotsByCategory(updatedCategorys);
      }catch(error){
        toast.error(error)
      }
     
    };
    fetchCategory();
  }, [classid, topicid]);
  const date = new Date()
  const handleDownload =  (dataURI) => {
    if (!dataURI ) {
      toast.error("Geçersiz dataURI veya dataURI.image değeri");
      return;
    }
  
    const base64Data = dataURI.image.replace(/^data:image\/\w+;base64,/, '');
  
    if (!base64Data) {
      toast.error("Geçersiz base64 verisi");
      return;
    }
  const binaryData = atob(base64Data);
  const arrayBuffer = new ArrayBuffer(binaryData?.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: dataURI?.mimetype });
  const href = window.URL.createObjectURL(blob);
  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = `${date.getTime()}.${dataURI?.mimetype?.split("/").pop()}`;
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
  };
  
  return (
    <NotsMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        {notsByCategory.map((not) => (
          <div key={not.id}>
            {not?.mimetype.split("/").pop() === ("pdf" || "PDF") ? (
              <div>
                <button
                  onClick={() => handleDownload(not)}
                  className="relative group"
                >
                  <img
                    src={pdf}
                    alt={not.description}
                    className="w-[200px] xtablet:w-[200px] h-[260px] object-cover group-hover:opacity-25 transition-opacity duration-300"
                  />

                  <span className="absolute  left-0 right-0 bottom-[50%] opacity-0 group-hover:opacity-90 transition-opacity duration-300 font-extrabold text-[1.5rem]">
                    Dowloand
                  </span>
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => handleDownload(not.image)}
                  className="relative group"
                >
                  <img
                    src={`${not.image}`}
                    alt={not.category}
                    className="w-[200px] xtablet:w-[200px] h-[260px] object-cover group-hover:opacity-25 transition-opacity duration-300"
                  />

                  <span className="absolute  left-0 right-0 bottom-[50%] opacity-0 group-hover:opacity-90 transition-opacity duration-300 font-extrabold text-[1.5rem]">
                    Dowloand
                  </span>
                </button>
              </div>
            )}

            <div className="w-full text-center capitalize font-bold text-[1.5rem]">{not.description}</div>
          </div>
        ))}
      </div>
    </NotsMain>
  );
}
