import axios from "axios";
import classNames from "classnames";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAppearance } from "../../../../store/appearance/hooks";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditBlog() {
  const { id } = useParams();
 const [oldImage, setOldImage] = useState("")
  const [image,setImage] = useState("")
  const [header, setHeader] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const { theme } = useAppearance();
  const navigate = useNavigate();
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: []}],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockqoute"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link"],
    ],
    
  };

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
          <div className="w-full flex items-center justify-start flex-col gap-2 ">
            <h4 className="w-[95%]"> Başlık</h4>
            <input
              type="text"
              name="header"
              value={header}
              className={classNames(
                "w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",
                {
                  "border-black": theme.name === "light",
                }
              )}
              onChange={(e) => setHeader(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center justify-start flex-col gap-2 ">
            <h4 className="w-[95%]">Alt Başlık</h4>
            <input
              type="text"
              name="subtitle"
              value={subtitle}
              className={classNames(
                "w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",
                {
                  "border-black": theme.name === "light",
                }
              )}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center justify-start flex-col gap-2 ">
            <h4 className="w-[95%]"> Blog Alanı </h4>
            <ReactQuill
              theme="snow"
              name="content"
              value={content}
              modules={modules}
             onChange={(content) => setContent(content)}
              className={
                "w-[98%] bg-transparent rounded-sm px-4 h-[20rem]"
              }
            />
          </div>
          <div className="w-full flex items-center justify-start flex-col gap-2 mt-10 ">
      <h4 className="w-[95%]"> Dosya Ekle </h4>
      <input
      type="file"
      name="image"
      className={classNames("w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",{
          "border-black": theme.name ==="light"
        })}
 
      onChange={(e)=> setImage(e.target.files[0])}
    /> 
    </div>  

          <button
            type="submit"
            className={classNames(
              "w-[95%] px-3 py-2 relative active:translate-y-1 ",
              {
                "bg-black/60 text-white": theme.name === "dark",
              }
            )}
          >
            Blog Edit
          </button>
        </form>
      </div>
    </div>
  );
}
