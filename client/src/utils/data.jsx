import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
export const DataProvider = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dataProvider = async () => {
      await axios.get(`${import.meta.env.VITE_BASE_URL}/${endpoint}`)
        .then((req) => {
          if (req) {
            console.log(req)
            setData(req.data);
          }
        })
        .catch((err) => {
          toast.error(err);
        }).finally(()=>{
          setLoading(false)
        })
    };
    dataProvider();
  }, [endpoint]);

  return { data, loading };
};
