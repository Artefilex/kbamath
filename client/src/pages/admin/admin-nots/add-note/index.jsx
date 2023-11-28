import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";

export default function AddNote (){
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
  
    const handleSubit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      if (category === "" || image === "" || description === "" || image ==="") {
        return toast.error(`category ,image ve  açıklama`);
      }
      formData.append("image", image);
      formData.append("category", category);
      formData.append("description", description);
      const addNots = async () => {
        await addItem("nots", formData,"Nots") 
      };
      await addNots();
      navigate("/admin/nots");
     
    };
    return (
        <form
          encType="multipart/form-data"
          onSubmit={handleSubit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Category"}>
        
            <FormInput
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Açıklama"}>
            {" "}
            <FormInput
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
          </FormContent>

          <FormContent header={"Dosya Ekle"}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton>Note Ekle </FormButton>
          
        </form>
    )
} 