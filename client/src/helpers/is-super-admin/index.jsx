import { useEffect, useState } from "react";
import { getAllItems } from "../../servises/admin";

export default function SuperAdmin (){
    const [loginUser, setLoginUser] = useState(null);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        const getLogin = await JSON.parse(localStorage.getItem("userLogin"));
        setLoginUser(getLogin);
        const response = await getAllItems("users");
      setUsers(response)
      
      };
      fetchUsers();
    }, []);
    const filtered = users.find((item) => loginUser?.email ===item?.email && item?.superAdmin )
  
    return {filtered}


}