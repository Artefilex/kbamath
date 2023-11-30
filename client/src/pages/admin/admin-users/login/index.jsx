import { useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { userLogin } from "../../../../servises/admin";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate()
 const [password , setPassword] = useState("");
 const [email , setEmail] = useState("")
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password)
    formData.append("email", email)
  
    const postRegister = async () => {
    const response = await userLogin(formData)
    if(response.isAdmin){
       await localStorage.setItem("userLogin", JSON.stringify(response))    

        navigate("/admin");   
    }else{
      toast.error("kullanıcı izniz yoktur lütfen defolun burdan")
    }

      
  
    }
    await  postRegister()
    
  };



  return (
    <div className="w-[95%] max-w-[600px] flex flex-col gap-2">
       <Toaster position="top-right" />
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <FormContent header={"Email"}>
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormContent>
      <FormContent header={"Parola"}>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormContent>

      <FormButton> login </FormButton>
    </form>
  </div>
);
  
  
}
