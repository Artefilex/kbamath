import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export  const DataProvider = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

useEffect(()=>{
const dataProvider = async () => {
await  fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, {
    method: "GET",
    headers: { "Content-Type": "application/Json" },
  })
  .then((dat) => dat.json())
  .then((req) => {
      if (req) {
        setData(req);
        setLoading(false);
      }
    })
    .catch((err) => {
      toast.error(err);
    });
}
dataProvider()

},[endpoint])



  return { data, loading };
};

