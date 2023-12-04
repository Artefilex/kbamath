import { Link, useParams } from "react-router-dom";
import NotsMain from "../nots-component";
import LeftBar from "../left-navbar";
import { useEffect, useState } from "react";
import { getNotsByClass } from "../../../servises";
export default function ClassDetail() {
  // Sınıfa Göre verileri filtreleyip mapleyecegiz
  const { classid } = useParams();
  const [notsByClass, setNotsByClass] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const notsByClasses = await getNotsByClass(classid);
      setNotsByClass(notsByClasses);
    };
    fetchCategory();
  }, [classid]);

  return (
    <NotsMain>
      <div className="flex flex-col  w-full  gap-6 mobile:flex-row">
        <LeftBar />
        {notsByClass.map((not) => (
          <Link key={not.id} to={`/notlar/${classid}/${not.category}`}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${not.image}`}
              alt={not.category}
              className="w-[200px] xtablet:w-[200px] h-full max-h-[400px] object-cover"
            />
            <div>{not.category}</div>
          </Link>
        ))}
      </div>
    </NotsMain>
  );
}
