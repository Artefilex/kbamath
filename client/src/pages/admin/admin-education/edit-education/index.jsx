import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
function EditEducation() {
  const { id } = useParams();

  const [oldImage, setOldImage] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/admin/education/${id}`
      );
      setTitle(data.title);
      setPrice(data.price);
      setContent(data.content);
      setOldImage(data.image);
    };
    fetchData();
  }, [id]);

  const handleSubit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("oldImage", oldImage);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("price", price);
    const addEducation = async () => {
      const response = await axios.put(
        `http://localhost:4000/admin/education/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success(`${title} özel dersi güncellendi `);
        navigate("/admin/educations");
      }
    };
    addEducation();
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
          <input type="hidden" name="oldImage" value={oldImage} />
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

          <FormButton> Dersi Güncelle</FormButton>
        </form>
      </div>
    </div>
  );
}

export default EditEducation;
