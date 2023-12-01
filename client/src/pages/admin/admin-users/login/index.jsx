import { useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { userLogin } from "../../../../servises/admin";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { setLogin } from "../../../../store/auth/action";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("password", password);
    formData.append("email", email);

    try {
      const response = await userLogin(formData);

      if (response?.isAdmin) {
        dispatch(setLogin());
        navigate("/admin"); 
      } else {
        toast.error("Kullanıcı izniniz yoktur. Lütfen defolun buradan.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="w-[95%] max-w-[500px] flex flex-col items-center justify-center gap-2 z-10">
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        method="POST"
        className="w-full rounded-xl  flex-col flex items-center  justify-center font-bold gap-3  backdrop-blur-2xl text-white bg-black/50 mt-16 pt-8 pb-7"
      >
        <h1 className="text-[2rem]">Giriş Yap</h1>
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
