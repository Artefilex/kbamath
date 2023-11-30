import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem ,getAllItems } from "../../../../servises/admin";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isAdmin,setIsAdmin] = useState(true)
  useEffect(()=>{
   const fetchdata = async () => {
     const response =  await  getAllItems("users")
       if(response.length > 0){
          setIsAdmin(false)
       }
      }
    fetchdata()
  },[])
  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [password , setPassword] = useState("");
 const [email , setEmail] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append( "username", userName)
    formData.append("password", password)
    formData.append("email", email)
    formData.append("isAdmin",isAdmin)
  
    const postRegister = async () => {
      await addItem("users",formData, `Kayıt Başarılı`)
    }
    await  postRegister()
    navigate("/login");
  };

  return (
    <div className="w-[95%] max-w-[600px] flex flex-col gap-2">
      <form
      
        onSubmit={handleSubmit}
        method="POST"
        className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
      > 
      {/* <input type="hidden" name="isAdmin" value={true} /> */}
        <FormContent header={"Kullanıcı Adı"}>
          <FormInput
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormContent>
        <FormContent header={"Email"}>
          <FormInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormContent>
        <FormContent header={"Parola"}>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormContent>

        <FormButton> Kayıt Ol </FormButton>
      </form>
    </div>
  );
}
