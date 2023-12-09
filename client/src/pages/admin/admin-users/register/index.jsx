import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem, getAllItems } from "../../../../servises/admin";
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik"
import { RegisterShema } from "../../validations/RegisterShema";
import toast from "react-hot-toast";
export default function Register() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [superAdmin, setSuperAdmin] = useState(true)
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getAllItems("users");
      if (response.length > 0) {
         setIsAdmin(false);
        setSuperAdmin(false)
       }
    };
    fetchdata();
  }, []);
const navigate = useNavigate();
const checkUserUniqueness = async (username, email) => {
  const existingUsers = await getAllItems("users");
  const isUsernameUnique = !existingUsers.some((user) => user.username === username);
  const isEmailUnique = !existingUsers.some((user) => user.email === email);
  return { isUsernameUnique, isEmailUnique };
};
 const formik = useFormik({
    initialValues:{
      username:"",
      email:"",
      password: "",
      passwordConfirm:"",
    },
    validationSchema: RegisterShema,
    onSubmit: async (values) =>{
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);
      formData.append("email", values.email);
      formData.append("isAdmin", isAdmin);
      formData.append("superAdmin", superAdmin)
     try{
      const { isUsernameUnique, isEmailUnique } = await checkUserUniqueness(values.username, values.email);
      if (!isUsernameUnique) {
        return toast.error("Kullanıcı adı kullanılıyor");
      }
      if (!isEmailUnique) {
        return toast.error("E-posta adresi kullanılıyor");
      }
      await addItem("users", formData, `Kayıt Başarılı`);
      navigate("/login");
     }catch(error){
        toast.error(error)
     }
    }
 })
  return (
    <div className="w-[95%] max-w-[500px] flex flex-col items-center justify-center gap-2 z-10  ">
      <form  className="w-full rounded-xl  flex-col flex items-center  justify-center font-bold gap-2  backdrop-blur-2xl text-white bg-black/50 mt-10 pt-1 pb-6"
        onSubmit={formik.handleSubmit}
        method="POST"
     >
        <h1 className="text-[2rem]">Kayıt Ol</h1>
        <FormContent >
          <FormInput
            type="text"
            id="username"
            name="username"
            label={"Kullanıcı Adı"}
            value={formik.values.username}
            onChange={formik.handleChange}
            formikError={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            handleBlur={formik.handleBlur}
          />
        </FormContent>
        <FormContent>
          <FormInput
            type="text"
            id="email"
            label={"Email"}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            formikError={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            handleBlur={formik.handleBlur}
          />
        </FormContent>
        <FormContent 
        >
          <FormInput
            type={ "password"}
            id="password"
            label={"Parola"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            formikError={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            handleBlur={formik.handleBlur}
          />
          
        </FormContent>
       
        <FormContent >
          <FormInput
            type={"password"}
            label={"Parola Tekrar"}
            name="passwordConfirm"
            id="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            formikError={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
            helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
            handleBlur={formik.handleBlur}
          />
           
        </FormContent>

        <FormButton> Kayıt Ol </FormButton>
      </form>
    </div>
  );
}
