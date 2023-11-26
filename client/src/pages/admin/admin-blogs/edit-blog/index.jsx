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
      const { data } = await axios.get(
        `http://localhost:4000/admin/blogs/${id}`
      );
      console.log(data)
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
    const addEducation = async () => {
      const response = await axios.put(
        `http://localhost:4000/admin/blogs/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success(`${header} Bloğu güncellendi `);
        console.log("helal amcaoglu");
        navigate("/admin/blogs");
      }
    };
    addEducation();
  };
  console.log(content)
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

          <FormContent header={"Alt Başlık"}>
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

          <FormButton>DBloğu Güncelle</FormButton>
        </form>
      </div>
    </div>
  );
}

