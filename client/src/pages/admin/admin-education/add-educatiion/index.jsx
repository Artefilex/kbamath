import { useState } from "react";
import axios from "axios";
export default function AddEducation() {

  const [image,setImage] = useState("")
  const [title,setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [content,setContent] = useState("")

  const handleSubit = (e) => {
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
        console.log("helal amcaoglu");
      }
    };
    addEducation();
  };
  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubit}
      method="POST"
      className="w-[80%] py-4 flex-col flex items-center justify-center bg-[color:var(--bg-secondary)] gap-3"
    >
   
      <div className="w-full flex items-center justify-start flex-col gap-2 ">
        <h4 className="w-[90%]"> Title</h4>
        <input
          type="text"
          name="title"
          value={title}
          className="w-[90%] bg-transparent border rounded-sm px-4 py-2 "
          onChange={(e)=> setTitle(e.target.value)}
        />
      </div>

      <div className="w-full flex items-center justify-start flex-col gap-2 ">
        <h4 className="w-[90%]"> Price</h4>
        <input
          type="text"
          name="price"
          value={price}
          className="w-[90%] bg-transparent border rounded-sm px-4 py-2 "
          onChange={(e)=> setPrice(e.target.value)}
        />
      </div>

      <div className="w-full flex items-center justify-start flex-col gap-2 ">
        <h4 className="w-[90%]"> Content</h4>
        <textarea
          type="text"
          name="content"
          value={content}
          className="w-[90%] bg-transparent border rounded-sm px-4 py-2 "
          onChange={(e)=> setContent(e.target.value)}
        />
      </div>

       <input
        type="file"
        name="image"
        className="w-[90%] bg-transparent border rounded-sm "
   
        onChange={(e)=> setImage(e.target.files[0])}
      /> 
      <button
        type="submit"
        className="w-[90%] bg-[color:var(--c-subbase)]   px-3 py-4"
      >
        Ders Ekle
      </button>
    </form>
  );
}