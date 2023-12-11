import { useNavigate, useParams } from "react-router-dom";
import {useFormik} from "formik"
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import {  editItem } from "../../../../servises/admin";
import { setLogout } from "../../../../store/auth/action";

export default function UsersEdit() {
    const {id} = useParams()
    const  navigate= useNavigate()
   const formik = useFormik({
    initialValues:{
      oldPassword: "",
      password: "",
      passwordConfirm:""
    },
    onSubmit: async (values) =>{
      const formData = new FormData()
      formData.append("password", values.password)
      formData.append("oldPassword", values.oldPassword)
      const editUser = async () => {
        const message = "user"
        await editItem(`users/${id}`, formData,message, id )
        await setLogout()
        navigate("/login")
      }
      editUser();
    }
   })

  return (
  
    <form
    onSubmit={formik.handleSubmit}
    method="PUT"
    className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
  >
    <FormContent >
      <FormInput
      label={"Eski Parola"}
        type="password"
        id={"oldPassword"}
        name="oldPassword"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
      />
    </FormContent>


    <FormContent>
      <FormInput
       type="password"
       id={"password"}
        label={"Parola Güncelle"}
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
    </FormContent>
    <FormContent >
      <FormInput
       type="password"
       label={"Yeni Parola Tekrar "}
       id={"passwordConfirm"}
        name="passwordConfirm"
        value={formik.values.passwordConfirm}
        onChange={formik.handleChange}
      />
    </FormContent>

    <FormButton> Güncelle </FormButton>
  </form>
   
  );
}
