
import { useState  } from "react";
import {SectionMain} from "../section-main"
import { resetPassword } from "../../../firebase";
export default function UpdateUser(){
    const [ password, setPassword] = useState("");
     

       const handleSubmit = async (e)=>{
         e.preventDefault()
         const user = await resetPassword(password)
         if(user){
          setPassword("")
         }
        }

         return (
             <SectionMain> 
               <form  className="flex flex-col gap-4  max-w-[20rem]" onSubmit={handleSubmit}>
            
                 <div className="flex flex-col gap-4 ">
                   <h4> Reset Password </h4>
                   <input 
                     className="bg-transparent  border rounded-md p-1.5 px-3 "
                      placeholder="******"
                     type="password"
                     name="password"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                   />
                 </div>
               <div>
                <button type="submit" disabled={!password}> Parola Güncelle</button>
               </div>
               </form>
     
             </SectionMain>
         )
}