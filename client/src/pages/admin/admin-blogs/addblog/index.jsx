import axios from "axios"
import classNames from "classnames"
import { useState } from "react"
import { useAppearance } from "../../../../store/appearance/hooks"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function AddBlog (){
    const [image,setImage] = useState("")
    const [header,setHeader] = useState("")
    const [subtitle,setSubtitle] = useState("")
    const [content,setContent] = useState("")
    const {theme} = useAppearance()
    const navigate = useNavigate()
    const handleSubit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      if(header==="" || content ==="" || subtitle === "" ){
        return toast.error(`başlık ,alt başlık ve  blog alanı boş bırakılamaz` )
      }
      formData.append("image", image);
      formData.append("header", header);
      formData.append("content", content);
      formData.append("subtitle", subtitle);
      const addEducation = async () => {
        const response = await axios.post(
          "http://localhost:4000/admin/blogs",
          formData
        );
        if (response.status === 200) {
          console.log("helal amcaoglu");
        }
      };
      await  addEducation()
      navigate("/admin/blogs")
      setImage("")
      setHeader("")
      setContent("")
      setSubtitle("")
      toast.success("Blog Eklendi")
     
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
   
      <div className="w-full flex items-center justify-start flex-col gap-2 ">
        <h4 className="w-[95%]"> Başlık</h4>
        <input
          type="text"
          name="header"
          value={header}
          className={classNames("w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",{
            "border-black": theme.name ==="light"
          })}
          onChange={(e)=> setHeader(e.target.value)}
        />
      </div>

      <div className="w-full flex items-center justify-start flex-col gap-2 ">
        <h4 className="w-[95%]">Alt Başlık</h4>
        <input
          type="text"
          name="subtitle"
          value={subtitle}
          className={classNames("w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",{
            "border-black": theme.name ==="light"
          })}
          onChange={(e)=> setSubtitle(e.target.value)}
        />
      </div>

      <div className="w-full flex items-center justify-start flex-col gap-2 ">
        <h4 className="w-[95%]"> Blog Alanı </h4>
        <textarea
          type="text"
          name="content"
          value={content}
          className={classNames("w-[95%] bg-transparent border  rounded-sm px-4 py-2 ",{
            "border-black": theme.name ==="light"
          })}
          onChange={(e)=> setContent(e.target.value)}
        />
      </div>
      <div className="w-full flex items-center justify-start flex-col gap-2 ">
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
        className={classNames("w-[95%] px-3 py-2 relative active:translate-y-1 ",{
            "bg-black/60 text-white" : theme.name ==="dark"
        })}
      >
        Ders Ekle
      </button>
    </form>
        </div>
    
     </div>
        
    )
} 