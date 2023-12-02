import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem, getAllItems } from "../../../../servises/admin";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isAdmin, setIsAdmin] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await getAllItems("users");
      if (response.length > 0) {
        setIsAdmin(false);
      }
    };
    fetchdata();
  }, []);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("isAdmin", isAdmin);

    const postRegister = async () => {
      await addItem("users", formData, `Kayıt Başarılı`);
    };
    await postRegister();
    navigate("/login");
  };

  return (
    <div className="w-[95%] max-w-[500px] flex flex-col items-center justify-center gap-2 z-10  ">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="w-full rounded-xl  flex-col flex items-center  justify-center font-bold gap-3  backdrop-blur-2xl text-white bg-black/50 mt-16 pt-8 pb-7"
      >
        <h1 className="text-[2rem]">Kayıt Ol</h1>
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
