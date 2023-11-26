import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
export default function AddEducation() {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("price", price);
    const addEducation = async () => {
      const response = await axios.post(
        "http://localhost:4000/admin/education",
        formData
      );
      if (response.status === 200) {
        toast.success("Özel Ders Eklendi");
      } else {
        toast.error("Özel Ders Eklenemedi");
      }
    };
    await addEducation();
    navigate("/admin/educations");
    setImage("");
    setTitle("");
    setContent("");
    setPrice("");
  };
  return (
    <div className="w-[100%] flex items-start flex-col gap-4">
      <div className=" w-full">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Başlık"}>
            <FormInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Fiyat Bilgisi"}>
            <FormInput
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Açıklama"}>
            <QuillTextArea
              name="content"
              value={content}
              onChange={(content) => setContent(content)}
            />
          </FormContent>

          <FormContent header={"Fotoğraf Ekle "}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton> Özel Ders Ekle</FormButton>
        </form>
      </div>
    </div>
  );
}
