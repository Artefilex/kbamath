import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";
export default function AddBlog() {
  const [image, setImage] = useState("");
  const [header, setHeader] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (header === "" || content === "" || subtitle === "" || image ==="") {
      return toast.error(`başlık ,alt başlık ve  blog alanı boş bırakılamaz`);
    }
    formData.append("image", image);
    formData.append("header", header);
    formData.append("content", content);
    formData.append("subtitle", subtitle);
    const addBlog = async () => {
      await addItem("blogs", formData,"Blog") 
    };
    await addBlog();
    navigate("/admin/blogs");
   
  };
  return (
    <div className="w-full flex items-start flex-col gap-4">
      <div className=" w-full">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Başlık"}>
            {" "}
            <FormInput
              type="text"
              name="header"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
            />{" "}
          </FormContent>

          <FormContent header={"Alt Başlık"}>
            {" "}
            <FormInput
              type="text"
              name="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />{" "}
          </FormContent>

          <FormContent header={"Açıklama"}>
            <QuillTextArea
              name="content"
              value={content}
              onChange={(content) => setContent(content)}
            />
          </FormContent>

          <FormContent header={"Dosya Ekle"}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton>Blog Ekle </FormButton>
          
        </form>
      </div>
    </div>
  );
}
