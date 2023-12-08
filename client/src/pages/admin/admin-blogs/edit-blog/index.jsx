import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  FormContent,
  FormInput,
  FormButton,
  QuillTextArea,
} from "../../../../components/form";
import { getSingleItem, editItem } from "../../../../servises/admin";
import { editBlogShema } from "../../validations/blogShema";
export default function EditBlog() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      image: "",
      header: "",
      subtitle: "",
      oldImage:"",
    },
    validationSchema:editBlogShema,
    onSubmit: async (values) => {
      const addBlog = async () => {
        const formData = new FormData();
        formData.append("image", values.image);
        formData.append("oldImage",values.oldImage);
        formData.append("header", values.header);
        formData.append("content", content);
        formData.append("subtitle", values.subtitle);
        const message = "Blog";
        await editItem(`blogs/${id}`, formData, message, values.header);
      };
      await addBlog();
      navigate("/admin/blogs");
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleItem(`blogs/${id}`);
      formik.setValues({
        header: data.header,
        subtitle: data.subtitle,
        oldImage: data.image
      });
      setContent(data.content);
    };
    fetchData();
  }, [id]);

  return (
    <form
      encType="multipart/form-data"
      onSubmit={formik.handleSubmit}
      method="POST"
      className="w-full rounded-xl py-4 flex-col flex items-center justify-center  gap-3"
    >
      <input type="hidden" name="oldImage" value={formik.values.oldImage} />
      <FormContent >
        {" "}
        <FormInput
         label={"Blog Başlığını Güncelle"}
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

      <FormContent >
        {" "}
        <FormInput
          id="subtitle"
          type="text"
          name="subtitle" 
          label={"Alt Başlığı Güncelle"}
          value={formik.values.subtitle}
          onChange={formik.handleChange}
          formikError={
            formik.touched.subtitle && Boolean(formik.errors.subtitle)
          }
          helperText={formik.touched.subtitle && formik.errors.subtitle}
          handleBlur={formik.handleBlur}
        />{" "}
      </FormContent>

      <FormContent header={"Açıklamayı Güncelle"}>
        <QuillTextArea
          name="content"
          value={content}
          onChange={(content) => setContent(content)}
        />
      </FormContent>

      <FormContent>
        <FormInput
          id="image"
          type="file"
          name="image"
          label={"Dosyayı Güncelle"}
          onChange={(e) =>
            formik.setFieldValue("image", e?.currentTarget?.files[0])
          }
          formikError={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          handleBlur={formik.handleBlur}
        />
      </FormContent>

      <FormButton> Güncelle</FormButton>
    </form>
  );
}
