import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
export default function AddQuizs() {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const [ iframeHeight, setIframeHeight] = useState("");

  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("iframeUrl", iframeUrl);
    formData.append("iframeHeight", iframeHeight);
    const addQuizs = async () => {
      const response = await axios.post(
        "http://localhost:4000/admin/quizs",
        formData
      );
      if (response.status === 200) {
        toast.success("Özel Ders Eklendi");
      } else {
        toast.error("Özel Ders Eklenemedi");
      }
    };
    await addQuizs();
    navigate("/admin/quizs");
    setImage("");
    setTitle("");
    setIframeHeight("");
    setIframeUrl("");
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
          <FormContent header={"Sınav Başlığı"}>
            <FormInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Sınav Linki"}>
            <FormInput
              type="text"
              name="iframeUrl"
              value={iframeUrl}
              onChange={(e) => setIframeUrl(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Form Yüksekliği"}>
          <FormInput
              type="number"
              name="iframeHeight"
              value={iframeHeight}
              onChange={(e) => setIframeHeight(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Başlık Fotoğrafı"}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton> Sınav Ekle </FormButton>
        </form>
      </div>
    </div>
  );
}
