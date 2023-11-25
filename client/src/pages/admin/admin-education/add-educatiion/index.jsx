import { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import classNames from "classnames";
import toast from "react-hot-toast";
import { useAppearance } from "../../../../store/appearance/hooks";
import { useNavigate } from "react-router-dom";
export default function AddEducation() {
  const { theme } = useAppearance();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockqoute"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link"],
    ],
  };
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
          <div className="w-full flex items-center justify-start flex-col gap-2 ">
            <h4 className="w-[95%]"> Başlık</h4>
            <input
              type="text"
              name="title"
              value={title}
              className={classNames(
                "w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",
                {
                  "border-black": theme.name === "light",
                }
              )}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center justify-start flex-col gap-2 ">
            <h4 className="w-[95%]">Fiyat Bilgisi </h4>
            <input
              type="text"
              name="price"
              value={price}
              className={classNames(
                "w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",
                {
                  "border-black": theme.name === "light",
                }
              )}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center justify-start flex-col gap-2 ">
            <h4 className="w-[95%]"> Açıklama </h4>
            <ReactQuill
              theme="snow"
              name="content"
              value={content}
              modules={modules}
              onChange={(content) => setContent(content)}
              className={"w-[98%] bg-transparent rounded-sm px-4 h-[20rem]"}
            />
          </div>
          <div className="w-full flex items-center justify-start flex-col gap-2 mt-10 ">
            <h4 className="w-[95%]"> Fotoğraf Ekle </h4>
            <input
              type="file"
              name="image"
              className={classNames(
                "w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",
                {
                  "border-black": theme.name === "light",
                }
              )}
              onChange={(e) => setImage(e.target.files[0])}
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
            Özel Ders Ekle
          </button>
        </form>
      </div>
    </div>
  );
}
