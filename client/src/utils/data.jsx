import { useEffect, useState } from "react";

import axios from "axios";
export const DataProvider = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
     const dataProvider = async () => {
      const response =  await axios.get(`https://artefilex-portfoly.onrender.com/${endpoint}`)
      
       setData(response.data);
    };

    dataProvider();
  }, [endpoint]);

  return data  
};
