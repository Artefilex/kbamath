import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";

function CategoryAdd() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (title === "" || image === "" ) {
      return toast.error(`başlık ,alt başlık ve  blog alanı boş bırakılamaz`);
    }
    formData.append("image", image);
    formData.append("title", title);
    const addBlog = async () => {
      await addItem("category", formData,"Category") 
    };
    await addBlog();
    navigate("/admin/category");
   
  };
  return (
    <form
          encType="multipart/form-data"
          onSubmit={handleSubit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Category"}>
            {" "}
            <FormInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />{" "}
          </FormContent>


          <FormContent header={"Başlık Resmi"}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton>Category Ekle </FormButton>
          
        </form>
  );
}

export default CategoryAdd;
