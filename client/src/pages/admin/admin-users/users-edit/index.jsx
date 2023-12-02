import { useNavigate, useParams } from "react-router-dom";

import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { getSingleItem, editItem } from "../../../../servises/admin";
import { setLogout } from "../../../../store/auth/action";
import { useState } from "react";
export default function UsersEdit() {
    const {id} = useParams()
    const  navigate= useNavigate()
    const [image, setImage] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email , setEmail] = useState("")
    const [oldImage, setOldImage] = useState("");
   const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("oldImage", oldImage);
    formData.append("image" ,image)
    formData.append("username" ,username )
    formData.append("password", password)
    formData.append("email", email)
    const editUser = async () => {
      const message = "user"
      await editItem(`users/${id}`, formData,message, username )
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
 <input type="hidden" name="oldImage" value={oldImage} />
 <FormContent header={"Email"}>
      <FormInput
        type="text"
        name="title"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

    <FormContent header={"Kullanıcı İsmini Güncelle"}>
    <FormInput
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </FormContent>

    <FormContent header={"User Belirle"}>
      <FormInput
        type="file"
        name="avatar"
        onChange={(e) => setImage(e.target.files[0])}
      />
    </FormContent>

    <FormButton> Güncelle </FormButton>
  </form>
   
  );
}
