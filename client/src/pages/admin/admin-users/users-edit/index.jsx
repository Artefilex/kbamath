import { useNavigate, useParams } from "react-router-dom";

import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import {  editItem } from "../../../../servises/admin";
import { setLogout } from "../../../../store/auth/action";
import { useState } from "react";
export default function UsersEdit() {
    const {id} = useParams()
    const  navigate= useNavigate()
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
   const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("password", password)
    const editUser = async () => {
      const message = "user"
      await editItem(`users/${id}`, formData,message, id )
      await setLogout()
      navigate("/login")
    }
    editUser();
   }
  return (
  
    <form
    encType="multipart/form-data"
    onSubmit={handleSubmit}
    method="POST"
    className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
  >
    <FormContent header={"Eski Parola"}>
      <FormInput
        type="password"
        name="oldPassword"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
    </FormContent>


    <FormContent header={"Parola Güncelle"}>
      <FormInput
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </FormContent>
    <FormContent header={"Yeni Parola Tekrar "}>
      <FormInput
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </FormContent>

    <FormButton> Güncelle </FormButton>
  </form>
   
  );
}
