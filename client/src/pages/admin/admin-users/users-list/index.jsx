

import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { getAllItems, handleDelete } from "../../../../servises/admin";
import { Tooltip } from "react-tooltip";
export default function UsersList() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const fetchUsers = async () =>{
    const response =  await getAllItems("users")
    setUsers(response)
    }
    fetchUsers()
  },[])

  const deleteUser = async (deleteUrl) => {
    const url = `users/${deleteUrl}`;
    const successMessage = `${deleteUrl} Qiuz başarılı bir şekilde silindi `;
    const errorMessage = "Qiuz Silinemedi";
    const response = await handleDelete(url, successMessage, errorMessage);
    if(response){
      const filteredQuizs = users.filter((item) => item.paramsUrl !== deleteUrl);   
      setUsers(filteredQuizs);  
    }
  };

  return (
   
     <div className="w-[95%] flex flex-col gap-2">
      User List 
      {
        users.map((user) =>(
          <div key={user.id} className="w-full flex items-center justify-between flex-col border rounded-lg px-2 py-4 mobile:flex-row bg-[color:var(--bg-secondary)] gap-4 mobile:gap-0 "> 
           <div className="flex items-center justify-around gap-4 w-full">
         <div >
          {user.username}
         </div>
          <div >
          {user.email}
        </div>
           </div>  
          <div>
          <Tooltip content="Admin Yetkisi var sadece editleyebilirsin" anchorSelect="#admin" />
          {
            user.id === 1 ?  (
            <Link to={`/admin/users/${user.paramsUrl}`} className=" px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  " id="admin">
              Edit  
            </Link>) : (
              <button 
              className="hover:bg-red-700 px-4 py-2 transition-color duration-300 hover:rounded-lg hover:text-white  "
              onClick={() => deleteUser(user.paramsUrl)}
            >
              Delete
            </button>
            )
          }  
          </div>
          </div>
        ))
      }
      </div>
  
  );
}
