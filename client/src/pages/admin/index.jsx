
import SectionMain from "../../components/section-main";
import { useState ,useCallback } from "react";
import {useNavigate} from "react-router-dom"
import Cookies from "universal-cookie";
export default function Admin (){
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "http://localhost:4000/admin/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/Json" },
            body: JSON.stringify({ form: form }),
          }
        );
        if (response.ok) {
          const cookies = await new Cookies();
          cookies.set("isAdmin", true, { path: "/" });
        }
      } catch (err) {
        console.log("Fetch işlemi sırasında bir hata oluştu: ", err);
      }
      setForm({ name: "", password: "" });
      navigate("/");
    },
    [form, navigate]
  ); 

    return (
        <SectionMain> 
          <form action="" className="flex" onSubmit={handleSubmit}>
            <div className="form-card flex">
              <h4>User Name</h4>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div className="form-card flex">
              <h4>Password </h4>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
            </div>
            <button type="submit"> Login</button>
          </form>
          
        </SectionMain>
    )
} 