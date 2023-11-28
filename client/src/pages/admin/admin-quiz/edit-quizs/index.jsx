import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
} from "../../../../components/form";
import { getSingleItem, editItem } from "../../../../servises/admin";
export default function EditQuizs() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const [ iframeHeight, setIframeHeight] = useState("");
  const [oldImage, setOldImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await  getSingleItem(`quizs/${id}`)
      setTitle(data.title);
      setIframeUrl(data.iframeUrl);
      setIframeHeight(data.iframeHeight);
      setOldImage(data.image);
    };
    fetchData();
  }, [id]);

  const handleSubit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("oldImage", oldImage);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("iframeUrl", iframeUrl);
    formData.append("iframeHeight", iframeHeight);
    const editQuizs = async () => {
       const message = "quizs"
       await editItem(`quizs/${id}` ,formData , message , title) 
       navigate("/admin/quizs");
    };
     editQuizs();
   
  };
  return (
        <form
          encType="multipart/form-data"
          onSubmit={handleSubit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
       <input type="hidden" name="oldImage" value={oldImage} />
       <FormContent header={"Sınav Başlığını  Güncelle"}>
            <FormInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Sınav Linkini Güncelle"}>
            <FormInput
              type="text"
              name="iframeUrl"
              value={iframeUrl}
              onChange={(e) => setIframeUrl(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Form Yüksekliğini Güncelle"}>
          <FormInput
              type="number"
              name="iframeHeight"
              value={iframeHeight}
              onChange={(e) => setIframeHeight(e.target.value)}
            />
          </FormContent>

          <FormContent header={"Başlık Fotoğrafını Güncelle"}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton> Güncelle </FormButton>
        </form>
  );
}