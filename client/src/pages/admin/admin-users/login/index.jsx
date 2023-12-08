import {FormContent, FormInput, FormButton,} from "../../../../components/form";
import { getAllItems, userLogin } from "../../../../servises/admin";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { setLogin } from "../../../../store/auth/action";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { LoginShema } from "../../validations/RegisterShema";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

const formik = useFormik({
  initialValues:{
    email:"",
    password:"", 
  },
  validationSchema: LoginShema,
  onSubmit: async (values) => {
    const formData = new FormData();
    formData.append("password", values.password);
    formData.append("email", values.email);

    try {
      const response = await userLogin(formData);
      const  userData= await getAllItems("users")
      const user = userData.find(
        user => user.email ===  values.email
    );
      if (response?.isAdmin) {
        dispatch(setLogin());
        navigate("/admin"); 
      }else if (user){
          toast.error("Parola Yanlış ")
      }
      else {
        toast.error("Kullanıcı izniniz yoktur. Lütfen defolun buradan.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  }
})
  return (
    <div className="w-[95%] max-w-[500px] flex flex-col items-center justify-center gap-2 z-10">
      <Toaster position="top-right" />

      <form
        onSubmit={formik.handleSubmit}
        method="POST"
        className="w-full rounded-xl  flex-col flex items-center  justify-center font-bold gap-3  backdrop-blur-2xl text-white bg-black/50 mt-16 pt-8 pb-7"
      >
        <h1 className="text-[2rem]">Giriş Yap</h1>
        <FormContent >
        <FormInput
            type="text"
            id="email"
            name="email"
            label={"Email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            formikError={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            handleBlur={formik.handleBlur}
          />
        </FormContent>
      
        <FormContent  >
          <FormInput
            type={ "password"}
            id="password"
            name="password"
            label={"Parola"}
            value={formik.values.password}
            onChange={formik.handleChange}
            formikError={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            handleBlur={formik.handleBlur}
          />
          
        </FormContent>
        

        <FormButton> login </FormButton>
      </form>
    </div>
  );
}
