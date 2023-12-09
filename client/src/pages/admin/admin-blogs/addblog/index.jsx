import { useNavigate } from "react-router-dom";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
import { addItem } from "../../../../servises/admin";
import { useFormik } from "formik";
import { blogShema } from "../../validations/blogShema";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { checkCBlogUniqueness } from "../../validations/isUniqHeader";
export default function AddBlog() {
  const navigate = useNavigate();
  const [content, setContent] = useState("")
  const [adminEmail ,setAdminEmail ] = useState(null)
  useEffect(()=>{
    const getUser = async () =>{
      const user =  await JSON.parse(localStorage.getItem("userLogin"))
       setAdminEmail(user.email)
    
     }
    getUser()
 },[])
  const formik = useFormik({
    initialValues:{
      image:"",
      header: "",
      subtitle:"",
      author: ""
    },
  validationSchema:blogShema,
  onSubmit: async (values) => {
    const addBlog = async () => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("header", values.header);
      formData.append("content", content);
      formData.append("subtitle", values.subtitle);
      formData.append("author", adminEmail)
      try{
        const isUnique = await checkCBlogUniqueness(values.header);    
        if (!isUnique) {
          return toast.error("Başlık kullanılıyor"); 
        } 
        await addItem("blogs", formData,"Blog")
        navigate("/admin/blogs");
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    };
    await addBlog();
  }
  })

  return (
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent>
            {" "}
            <FormInput 
              id={"header"}
              label={"Blog Başlığı"}
              type="text"
              name="header"
              value={formik.values.header}
              onChange={formik.handleChange}
              formikError={formik.touched.header && Boolean(formik.errors.header)}
              helperText={formik.touched.header && formik.errors.header}
              handleBlur={formik.handleBlur}
            />{" "}
          </FormContent>

          <FormContent >
            {" "}
            <FormInput
            label={"Alt Başlık"}
              id="subtitle"
              type="text"
              name="subtitle"
              value={formik.values.subtitle}
              onChange={formik.handleChange}
              formikError={formik.touched.subtitle && Boolean(formik.errors.subtitle)}
              helperText={formik.touched.subtitle && formik.errors.subtitle}
              handleBlur={formik.handleBlur}
            />{" "}
          </FormContent>

          <FormContent header={"Açıklama"}>
            <QuillTextArea
              id="content"
              name="content"
              value={content}
              onChange={(content) => setContent(content)}
            />
          </FormContent>

          <FormContent >
            <FormInput
             id={"image"}
             label={"Dosya Ekle"}
              type="file"
              name="image"
              onChange={(e) => formik.setFieldValue("image" ,e.currentTarget.files[0])}
              formikError={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
              handleBlur={formik.handleBlur}
            />
          </FormContent>

          <FormButton>Blog Ekle </FormButton>
          
        </form>
  )
}
