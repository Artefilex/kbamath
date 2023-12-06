import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";

function ClassAdd() {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (title === "" ) {
      return toast.error("başlık boş bırakılamaz " );
    }
    formData.append("title", title);
   
    const addClasses = async () => {
      await addItem("oclass", formData,"Class") ;
     
    };
     addClasses();
    setTimeout(()=>{
      toast.success(`${title} başarıyla eklendi`)
      navigate("/admin/class");
    },1000)
   
  };
  return (
    <form
          onSubmit={handleSubit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Sınıf Belirle"}>
            <FormInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormContent>
          <FormButton>Sınıf Ekle </FormButton>
          
        </form>
  );
}

export default ClassAdd;
