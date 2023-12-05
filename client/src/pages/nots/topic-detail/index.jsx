import { useParams } from "react-router-dom";
import NotsMain from "../nots-component";
import LeftBar from "../left-navbar";
import { useEffect, useState } from "react";
import { getNotsByClassThenCategory } from "../../../servises";
import axios from "axios";
import pdf from "../../../assests/image/pdfimage.svg";
export default function TopicDetail() {
  const { classid } = useParams();
  const { topicid } = useParams();

  const [notsByCategory, setNotsByCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const notsCategory = await getNotsByClassThenCategory(classid, topicid);
      setNotsByCategory(notsCategory);
    };
    fetchCategory();
  }, [classid, topicid]);
  const as = "Images//1701731166186.pdf";
  console.log(as.split(".").pop());
  const handleDownload = async (url) => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/${url}`, { responseType: "blob" })
      .then((response) => {
        const href = window.URL.createObjectURL(response.data);
        const anchorElement = document.createElement("a");
        anchorElement.href = href;
        anchorElement.download = url.split("\\").pop();
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <NotsMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        {notsByCategory.map((not) => (
          <div key={not.id}>
            {not?.image.split(".").pop() === ("pdf" || "PDF") ? (
              <div>
                <button
                  onClick={() => handleDownload(not.image)}
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
                    src={`${import.meta.env.VITE_BASE_URL}/${not.image}`}
                    alt={not.category}
                    className="w-[200px] xtablet:w-[200px] h-[260px] object-cover group-hover:opacity-25 transition-opacity duration-300"
                  />

                  <span className="absolute  left-0 right-0 bottom-[50%] opacity-0 group-hover:opacity-90 transition-opacity duration-300 font-extrabold text-[1.5rem]">
                    Dowloand
                  </span>
                </button>
              </div>
            )}

            <div>{not.description}</div>
          </div>
        ))}
      </div>
    </NotsMain>
  );
}
