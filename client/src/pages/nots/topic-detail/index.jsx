import { useParams } from "react-router-dom";
import NotsMain from "../nots-component";
import LeftBar from "../left-navbar";
import { useEffect, useState } from "react";
import { getNotsByClassThenCategory } from "../../../servises";
// Konuya göre filtreleyip mapleleyecigz
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

  return (
    <NotsMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        {notsByCategory.map((not) => (
          <div key={not.id}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${not.image}`}
              alt={not.category}
              className="w-[200px] xtablet:w-[200px] h-full max-h-[400px] object-cover"
            />
            <div>{not.category}</div>
          </div>
        ))}
      </div>
    </NotsMain>
  );
}
