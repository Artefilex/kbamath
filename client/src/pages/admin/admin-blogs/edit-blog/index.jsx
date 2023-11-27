import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
import { getSingleItem,editItem } from "../../../../servises/admin";
export default function EditBlog() {
  const { id } = useParams();
  const [oldImage, setOldImage] = useState("")
  const [image,setImage] = useState("")
  const [header, setHeader] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const  data  = await getSingleItem(`blogs/${id}`) 
      setHeader(data.header);
      setSubtitle(data.subtitle);
      setContent(data.content);
      setOldImage(data.image)
    };
    fetchData();
  }, [id]);

  const handleSubit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("oldImage",oldImage)
    formData.append("header", header);
    formData.append("content", content);
    formData.append("subtitle", subtitle);
    const editEducation = async () => {
      const message = "Blog"
      await editItem(`blogs/${id}` ,formData,  message , header)
      navigate("/admin/blogs");    
    };
    editEducation();
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
          <FormContent header={"Başlığı Güncelle"}>
            {" "}
            <FormInput
              type="text"
              name="header"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
            />{" "}
          </FormContent>

          <FormContent header={"Alt Başlığı Güncelle"}>
            {" "}
            <FormInput
              type="text"
              name="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />{" "}
          </FormContent>

          <FormContent header={"Açıklamayı Güncelle"}>
            <QuillTextArea
              name="content"
              value={content}
              onChange={(content) => setContent(content)}
            />
          </FormContent>

          <FormContent header={"Dosyayı Güncelle"}>
            <FormInput
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </FormContent>

          <FormButton> Güncelle</FormButton>
        </form>
      </div>
    </div>
  );
}

