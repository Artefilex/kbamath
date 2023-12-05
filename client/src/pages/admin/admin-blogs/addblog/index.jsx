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
import { useState } from "react";
export default function AddBlog() {
  const navigate = useNavigate();
  const [content, setContent] = useState("")
  const formik = useFormik({
    initialValues:{
      image:"",
      header: "",
      subtitle:"",
    },
  validationSchema:blogShema,
  onSubmit: async (values) => {
    const addBlog = async () => {
      const formData = new FormData();
      formData.append("image", values.image);
      formData.append("header", values.header);
      formData.append("content", content);
      formData.append("subtitle", values.subtitle);
      await addItem("blogs", formData,"Blog") 
    };
    await addBlog();
    navigate("/admin/blogs");
  }
  })

 
  return (
        <form
          encType="multipart/form-data"
          onSubmit={formik.handleSubmit}
          method="POST"
          className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
        >
          <FormContent header={"Başlık"}>
            {" "}
            <FormInput
            id={"header"}
              type="text"
              name="header"
              value={formik.values.header}
              onChange={formik.handleChange}
              formikError={formik.touched.header && Boolean(formik.errors.header)}
              helperText={formik.touched.header && formik.errors.header}
              handleBlur={formik.handleBlur}
            />{" "}
          </FormContent>

          <FormContent header={"Alt Başlık"}>
            {" "}
            <FormInput
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
              // formikError={formik.touched.content && Boolean(formik.errors.content)}
              // helperText={formik.touched.content && formik.errors.content}
              // handleBlur={formik.handleBlur}
            />
          </FormContent>

          <FormContent header={"Dosya Ekle"}>
            <FormInput
             id={"image"}
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
