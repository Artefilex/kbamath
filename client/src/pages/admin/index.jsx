import { register , login } from "../../../firebase";
import SectionMain from "../../components/section-main";
import { useState ,useCallback } from "react";
import {useNavigate} from "react-router-dom"
// import Cookies from "universal-cookie";
export default function Admin (){
  const navigate = useNavigate();
  const [form, setForm] = useState({
   email: "",
    password: "",
  });
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  // const handleSubmit = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch(
  //         "http://localhost:4000/admin/login",
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/Json" },
  //           body: JSON.stringify({ form: form }),
  //         }
  //       );
  //       if (response.ok) {
  //         const cookies = await new Cookies();
  //         cookies.set("isAdmin", true, { path: "/" });
  //       }
  //     } catch (err) {
  //       console.log("Fetch işlemi sırasında bir hata oluştu: ", err);
  //     }
  //     setForm({ name: "", password: "" });
  //     navigate("/");
  //   },
  //   [form, navigate]
  // ); 
  const handleSubmit = async (e)=>{
    e.preventDefault()

    const user = await login(form.email, form.password)
    if(user){
     navigate("/")
    }

     console.log(user)
   }
    return (
        <SectionMain> 
          <form  className="flex flex-col gap-4  max-w-[20rem]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 ">
              <h4>User Name</h4>
              <input
              placeholder="user@gmail.com"
              className="bg-transparent  border rounded-md p-1.5 px-3 "
                type="text"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <h4>Password </h4>
              <input 
                className="bg-transparent  border rounded-md p-1.5 px-3 "
                 placeholder="******"
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
            </div>
          <div>
           <button type="submit" disabled={!form.email && !form.password}> Login</button>
          </div>
          </form>

        </SectionMain>
    )
} 