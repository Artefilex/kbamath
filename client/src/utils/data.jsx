import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL
export  const BlogProvider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

useEffect(()=>{
    fetch(`${baseUrl}/blogs`, {
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
},[])



  return { data, loading };
};


export const NotProvider = ()  => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
   useEffect(()=>{
    fetch(`${baseUrl}/nots `, {
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
   }, [])
   return [data, loading]
}